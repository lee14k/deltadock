import { useState } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NavMobile from "./NavMobile";
import { useMediaQuery } from "react-responsive";

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "Book",
    href: "/book",
  },
  {
    name: "Chef's Table",
    href: "/chefs-table",
  },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <div className="">
      {" "}
      {/* Added a surrounding div */}
      {isMobile ? (
        <NavMobile />
      ) : (
        <Disclosure as="nav" className="py-12 text-4xl bg-sky-200 ">
          {({ open }) => (
            <>
              <div className="flex justify-center pt-8">
                <div className="flex h-12 justify-center items-center">
                  <div className="absolute inset-y-0 left-0 flex sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center  sm:block">
                    <div className="flex space-x-12">
                      {navigation.map((item) => (
                        <div key={item.name}>
                          {item.children ? (
                            <span
                              className="cursor-pointer"
                              aria-current={item.current ? "page" : undefined}
                              onClick={() => toggleDropdown(item.name)}
                            >
                              {item.name}
                            </span>
                          ) : (
                            <Link href={item.href}>
                              <span className="text-4xl">{item.name}</span>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      )}
    </div>
  );
}
