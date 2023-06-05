import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import Wrapper from "./Wrapper";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navItems = ["Home", "About", "Services", "Contact"];

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="sticky bg-transparent top-0">
      <Wrapper>
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-helvetica text-xl font-bold text-white">DW</p>
          </div>
          <div className="flex gap-6 items-center">
            <FontAwesomeIcon
              size="xl"
              icon={faSearch}
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              size="xl"
              icon={faBars}
              style={{ color: "#ffffff" }}
              onClick={toggleMenu}
            />
          </div>
          <AnimatePresence>
            {openMenu && (
              <motion.div
                className="fixed h-[100vh] top-0 right-0 bg-black w-[90vw] md:w-[30vw] p-12"
                initial={{ width: "0" }}
                animate={{ width: "50vh" }}
                exit={{ width: 0, duration: 1, x: "20vw" }}
                transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              >
                <motion.div className="cursor-pointer" whileHover={{ rotate: 2,}} transition={{}}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2xl"
                    style={{ color: "#fff" }}
                    onClick={toggleMenu}
                    
                  />
                </motion.div>

                <motion.div
                  className="flex flex-col gap-12 justify-between my-12 cursor-pointer hover:underline hover:underline-offset-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {navItems.map((item) => {
                    return (
                      <motion.p
                        className="font-mono text-4xl text-white"
                        key={item}
                        whileHover={{
                          scale: 1.3,
                          x: 10,
                          color: 'red',
                          originX: 0,
                          
                        }}
                        animation={{ x: 0 }}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 300,
                        }}
                      >
                        {item}
                      </motion.p>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Wrapper>
    </div>
  );
};

export default NavBar;
