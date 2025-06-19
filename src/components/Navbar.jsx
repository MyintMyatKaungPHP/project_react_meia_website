import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import miea_logo_hr from "../assets/images/miea_logo_hr.png";
import miea_logo_hr_white from "../assets/images/miea_logo_hr_white.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full items-center ${
        isSticky
          ? "bg-white/70 backdrop-blur-lg dark:bg-dark/70"
          : "bg-white dark:bg-dark"
      }`}
    >
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img src={miea_logo_hr} alt="logo" className="dark:hidden" />
              <img
                src={miea_logo_hr_white}
                alt="logo"
                className="hidden dark:block"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-green focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:px-6 lg:py-0 lg:shadow-none ${
                  !open ? "hidden" : "bg-white dark:bg-dark"
                }`}
              >
                <ul className="block lg:flex">
                  <ListItem>
                    <LinkItem NavLink="/">Home</LinkItem>
                  </ListItem>
                  <ListItem>
                    <LinkItem NavLink="#" dropdown="true">
                      About
                    </LinkItem>
                    <Dropdown>
                      <DropdownItem
                        dropdownLink="/about_miea"
                        dropdownText="MIEA School"
                      />
                      <DropdownItem
                        dropdownLink="/organisational_structure"
                        dropdownText="Organizational Structure"
                      />
                      <DropdownItem
                        dropdownLink="/achievement"
                        dropdownText="Achievements"
                      />
                    </Dropdown>
                  </ListItem>
                  <ListItem>
                    <LinkItem NavLink="/#" dropdown="true">
                      Academic
                    </LinkItem>
                    <Dropdown>
                      <DropdownItem
                        dropdownLink="#"
                        dropdownText="Programmes"
                      />
                      <DropdownItem
                        dropdownLink="#"
                        dropdownText="School Facilities"
                      />
                      <DropdownItem
                        dropdownLink="/StudentAchievements"
                        dropdownText="Student's Achievements"
                      />
                    </Dropdown>
                  </ListItem>
                  <ListItem>
                    <LinkItem dropdown="true" NavLink="/#">
                      Media
                    </LinkItem>
                    <Dropdown>
                      <DropdownItem
                        dropdownLink="#"
                        dropdownText="News & Announcements"
                      />
                      <DropdownItem
                        dropdownLink="#"
                        dropdownText="Events & Activities"
                      />
                    </Dropdown>
                  </ListItem>

                  <ListItem>
                    <LinkItem NavLink="/#">Contact</LinkItem>
                  </ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <button
                onClick={toggleTheme}
                className="px-6 py-2.5 text-base font-medium text-dark hover:text-green dark:text-white dark:hover:text-yellow"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
              <a
                href="/#"
                className="px-6 py-2.5 text-base font-medium text-dark hover:text-green dark:text-white dark:hover:text-yellow"
              >
                Sign Up
              </a>
              <a
                href="/#"
                className="rounded-md bg-green px-6 py-2.5 text-base font-medium text-white hover:bg-yellow hover:text-dark"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children }) => {
  const [subMenu, setSubMenu] = useState(true);

  const childWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      subMenu: subMenu,
      setSubMenu: setSubMenu,
    });
  });

  return (
    <li className="submenu-item group relative lg:ml-12">{childWithProps}</li>
  );
};

const LinkItem = ({ children, NavLink, subMenu, setSubMenu, dropdown }) => {
  const handleClick = () => {
    event.preventDefault();
    setSubMenu(!subMenu);
  };

  return (
    <Link
      to={NavLink}
      onClick={handleClick}
      className={`relative flex px-6 py-2 text-base font-medium bg-transparent text-body-color group-hover:text-green dark:text-dark-6 dark:group-hover:text-yellow  lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 ${
        dropdown &&
        "after:absolute after:right-5 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:translate-y-[-50%] after:rotate-45 after:border-b-2 after:border-r-2 after:border-current lg:after:right-0"
      }`}
    >
      {children}
    </Link>
  );
};

const Dropdown = ({ children, subMenu }) => {
  return (
    <div
      className={`relative left-0 top-full rounded-lg bg-white  px-4 transition-all group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[115%] lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full 
      ${subMenu ? "hidden lg:block" : "block"}`}
    >
      {children}
    </div>
  );
};

const DropdownItem = ({ dropdownLink, dropdownText }) => {
  return (
    <Link
      to={dropdownLink}
      className="block rounded px-4 py-[10px] text-sm font-medium text-body-color hover:bg-green hover:text-white dark:text-dark-6 dark:hover:bg-green dark:hover:text-white"
    >
      {dropdownText}
    </Link>
  );
};

const SubmenuGroup = () => {
  return (
    <div className="-mx-4 flex flex-wrap lg:justify-center">
      <div className="w-full px-4 lg:w-1/3">
        <div>
          <h3 className="mb-[14px] text-base font-semibold text-dark dark:text-white">
            New Arrivals
          </h3>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Dresses
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Jackets
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Sweatshirts
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Tops &amp; Tees
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Party Dresses
          </a>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/3">
        <div>
          <h3 className="mb-[14px] text-base font-semibold text-dark dark:text-white">
            New Arrivals
          </h3>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Dresses
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Jackets
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Sweatshirts
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Tops &amp; Tees
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Party Dresses
          </a>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/3">
        <div>
          <h3 className="mb-[14px] text-base font-semibold text-dark dark:text-white">
            New Arrivals
          </h3>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Dresses
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Jackets
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Sweatshirts
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Tops &amp; Tees
          </a>
          <a
            href="/#"
            className="block py-[6px] text-base text-body-color hover:text-primary dark:text-dark-6"
          >
            Party Dresses
          </a>
        </div>
      </div>
    </div>
  );
};
