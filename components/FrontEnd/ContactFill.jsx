import { useState } from "react";
import { Switch } from "@headlessui/react";
import Link from "next/link";
import { Libre_Caslon_Display } from "next/font/google";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactFill() {
  const [agreed, setAgreed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object, passing in the form event target
    const form = event.target;
    const formData = new FormData(form);

    // Retrieve form data using FormData methods
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsModalOpen(true);
        console.log("Form submitted successfully");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="isolate px-6 sm:py-32 grid lg:grid-cols-2 customcontact">
      <div className="mx-auto px-16 flex flex-col justify-between bg-white pb-12  text-left">
        <h2 className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl py-10 ${libre.className}`}>
          Contact Us
        </h2>
        <div className="flex flex-col my-2">
          <h3 className="text-2xl font-semibold text-gray-900">Mailing Address</h3>
          <span>PO Box 36</span>
          <span>Rapid River, MI 49878</span>
        </div>
        <div className="flex flex-col my-2">
          <h3 className="text-2xl  font-semibold text-gray-900">Phone</h3>
          <span>Office <a href="tel:+19064281294">906.428.1294</a> </span>
        </div>
        <div className="flex flex-col my-2">
          <h3 className="text-2xl font-semibold text-gray-900">Email</h3>
          <span><a href="mailto:deltadockequipment@gmail.com">deltadockequipment@gmail.com</a></span>
      </div>
        <h4 className="text-2xl  font-semibold text-gray-900 mt-4">Find us on Facebook!</h4>     <Link href='https://www.facebook.com/profile.php?id=100084725174383'>
                <FacebookTwoToneIcon fontSize="large"/>
              </Link>
        <p className="text-2xl text-gray-900">Questions? Call  <a href="tel:+19064281294">906.428.1294</a></p>
        <button className="mt-2 bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-500">Call us today</button>
      </div>

      <form method="POST" className="mx-auto bg-white " onSubmit={handleSubmit}>
        <div className="px-16 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 pt-10 ">
          <div className="">
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
            <input type="text" name="firstName" id="firstName" autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
            <input type="text" name="lastName" id="lastName" autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
            <input type="email" name="email" id="email" autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
            <input type="tel" name="phoneNumber" id="phoneNumber" autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
            <textarea name="message" id="message" rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
          </div>
          <div className="sm:col-span-2 flex items-center">
            <Switch.Group as="div" className="flex gap-x-4">
              <Switch checked={agreed} onChange={setAgreed}
                className={classNames(agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600")}>
                <span className="sr-only">Agree to policies</span>
                <span aria-hidden="true" className={classNames(agreed ? "translate-x-3.5" : "translate-x-0",
                  "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out")} />
              </Switch>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <Link href="/privacy-policy" className="font-semibold text-sky-600">privacy&nbsp;policy</Link>.
              </Switch.Label>
            </Switch.Group>
          </div>
        </div>
        <div className="mt-10 pl-12">
          <button type="submit" className="block w-1/3 rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
            Let's talk
          </button>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="modal-bg fixed inset-0 bg-black opacity-50"></div>
            <div className="modal-content bg-white p-4 rounded-lg shadow-lg z-50">
              <p className="text-lg font-semibold text-green-600">
                Submission Successful!
              </p>
              <p>Your submission was successful. Thank you!</p>
              <button onClick={closeModal} className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
                Close
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
