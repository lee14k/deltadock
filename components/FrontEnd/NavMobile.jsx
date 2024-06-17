import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../../routes";
import Link from "next/link";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const handleSubmenuToggle = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  return (
    <div ref={ref}>
      <div className="bg-white mx-8 flex justify-center items-center burgercircle fancy-font">
        <Hamburger
          toggled={isOpen}
          size={100}
          toggle={setOpen}
          color={"black"}
          rounded={"true"}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 sticky"
          >
            <ul className="grid gap-2 bg-gradient-to-tr from-neutral-400 via-neutral-150 to-neutral-100 rounded-xl py-2 px-2">
              {routes.map((route, idx) => {
                const { title, submenu, href } = route;
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={title}
                    className="w-full py-2.5 rounded-xl bg-white"
                  >
                    {submenu ? (
                      <div
                        onClick={() => handleSubmenuToggle(title)}
                        className="flex items-center justify-center w-full rounded-xl cursor-pointer"
                      >
                        <span className="flex gap-1 text-2xl">{title}</span>
                      </div>
                    ) : (
                      <Link href={href}>
                        <span className="flex items-center justify-center w-full rounded-xl text-2xl">
                          {title}
                        </span>
                      </Link>
                    )}
                    {submenu && activeSubmenu === title && (
                      <ul className="grid gap-2 py-2">
                        {submenu.map((subItem, subIdx) => (
                          <motion.li
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              delay: 0.1 + subIdx / 10,
                            }}
                            key={subItem.title}
                            className="w-full py-1.5 rounded-xl bg-white"
                          >
                            <Link href={subItem.href}>
                              <span className="flex items-center justify-center w-full rounded-xl text-lg">
                                {subItem.title}
                              </span>
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
