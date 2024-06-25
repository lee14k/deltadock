// pages/api/google-reviews.js
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const placeUrl = "https://www.google.com/maps/place/?q=place_id:ChIJqX8Al7AsUQoRD8OTGVaCtKc";

// Helper function to create a delay
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

async function scrollPage(page, scrollContainer) {
  let lastHeight = await page.evaluate(`document.querySelector("${scrollContainer}").scrollHeight`);
  while (true) {
    await page.evaluate(`document.querySelector("${scrollContainer}").scrollTo(0, document.querySelector("${scrollContainer}").scrollHeight)`);
    await delay(2000);
    let newHeight = await page.evaluate(`document.querySelector("${scrollContainer}").scrollHeight`);
    if (newHeight === lastHeight) {
      break;
    }
    lastHeight = newHeight;
  }
}

async function getReviewsFromPage(page) {
  const reviews = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".jftiEf")).map((el) => {
      return {
        user: el.querySelector(".d4r55")?.textContent.trim() || "No name",
        rating: parseFloat(el.querySelector(".kvMYJc")?.getAttribute("aria-label")) || 0,
        snippet: el.querySelector(".MyEned")?.textContent.trim() || "No snippet",
      };
    });
  });
  return reviews;
}

export default async function handler(req, res) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(60000);
    await page.goto(placeUrl);

    // Wait for the place name element to load
    await page.waitForSelector(".DUwDvf");

    // Click to load more reviews (confirm this selector)
    await page.click(".hh2c6");
    await delay(2000);

    // Wait for the reviews to be present on the page
    await page.waitForSelector(".XiKgde");

    // Scroll through the reviews container to load all reviews
    await scrollPage(page, '.XiKgde');

    // Extract reviews from the page
    const reviews = await getReviewsFromPage(page);
    await browser.close();
    res.status(200).json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: error.message });
  }
}
