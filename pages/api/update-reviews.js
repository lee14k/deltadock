// pages/api/update-reviews.js
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { set } from '@vercel/edge-config';

puppeteer.use(StealthPlugin());

const placeUrl = "https://www.google.com/maps/place/?q=place_id:ChIJqX8Al7AsUQoRD8OTGVaCtKc";
const CACHE_KEY = 'google-reviews';

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
    await page.waitForSelector(".DUwDvf");

    await page.click(".DkEaL");
    await delay(2000);
    await page.waitForSelector(".jftiEf");
    await scrollPage(page, '.DxyBCb');

    const reviews = await getReviewsFromPage(page);
    await browser.close();

    await set(CACHE_KEY, { reviews, timestamp: Date.now() });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating reviews:', error);
    res.status(500).json({ error: error.message });
  }
}
