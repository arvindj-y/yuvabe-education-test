"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useRouter, usePathname } from "next/navigation"; 
import { pageData } from "../data/pageData"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<{ title: string; path: string }[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if menu item is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Check if menu dropdown contains active item
  const isDropdownActive = (links: { path: string }[]) => {
    return links.some(link => pathname.startsWith(link.path));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Close search when opening menu on mobile
    if (!menuOpen && isMobile) {
      setShowSearch(false);
    }
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    // Close menu when opening search on mobile
    if (!showSearch && isMobile) {
      setMenuOpen(false);
    }
  };

  // Handle search input changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = pageData.filter((page) =>
        page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        page.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredResults(results);
    }
  }, [searchQuery]);

  // Handle search result click
  const handleResultClick = (path: string) => {
    setSearchQuery(""); // Clear search input
    setFilteredResults([]); // Hide search results
    setShowSearch(false); // Close search on mobile
    router.push(path); // Navigate to selected page
  };

  const handleDropdownOpen = (menu: string | null) => {
    setOpenDropdown(menu === openDropdown ? null : menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    closeDropdown();
  };

  const navLinks = [
    {
      label: "STEAM",
      links: [
        { name: "About Steam", path: "/steam/about-steam" },
        { name: "Program Calendar", path: "/steam/program-calendar" },
        { name: "Auroville Program", path: "/steam/auroville" },
        { name: "Visitor Program", path: "/steam/visitor" },
      ],
    },
    {
      label: "Bridge",
      links: [
        { name: "About Bridge", path: "/bridge/about" },
        { name: "Program Calendar", path: "/bridge/bridge-program" },
        { name: "Digital Marketing", path: "/bridge/digital-marketing" },
        { name: "UI/UX", path: "/bridge/ui-ux" },
        { name: "AI", path: "/bridge/ai" },
        { name: "Corporate Sustainability", path: "/bridge/sustainability" },
        { name: "Market Research", path: "/bridge/market-research" },
        { name: "Workshop", path: "/bridge/workshop" },
      ],
    },
    {
      label: "Our Stories",
      links: [
        { name: "Blogs", path: "/stories/blogs" },
        { name: "Newsletter", path: "/stories/newsletters" },
        { name: "Impact Report", path: "/stories/impact-report" },
      ],
    },
    {
      label: "Get Involved",
      links: [
        { name: "We Serve", path: "/get-involved/we-serve" },
        { name: "We Evolve", path: "/get-involved/we-evolve" },
        { name: "Support Us", path: "/get-involved/support-us" },
        { name: "Join Us", path: "/get-involved/join-us" },
        { name: "Talk to Us", path: "/get-involved/talk-to-us" },
      ],
    },
  ];

  return (
    <header className="bg-white/95 shadow-lg shadow-gray-300 w-full px-3 sm:px-6 md:px-10 lg:px-14 xl:px-18 top-0 left-0 z-50 backdrop-blur-lg sticky">
      <nav className="flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={isMobile ? 40 : 50} 
              height={isMobile ? 40 : 50} 
              priority 
              style={{ width: "auto", height: "auto" }} 
            />
          </Link>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center space-x-2 lg:hidden">
          {/* Mobile Search Toggle */}
          <button 
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-gray-100 transition duration-300"
            aria-label="Toggle search"
          >
            <FiSearch size={24} className="text-gray-700 hover:text-[#592AC7]" />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition duration-300" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? 
              <HiX size={24} className="text-gray-700 hover:text-[#592AC7]" /> : 
              <HiOutlineMenu size={24} className="text-gray-700 hover:text-[#592AC7]" />
            }
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:space-x-6 xl:space-x-10 text-black font-medium font-primary">
          <li>
            <Link 
              href="/" 
              onClick={closeDropdown}
              className={`hover:text-[#592AC7] transition duration-300 py-2 px-1 block border-b-2 ${
                isActive("/") ? "text-[#592AC7] border-[#592AC7]" : "border-transparent"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about-us" 
              onClick={closeDropdown}
              className={`hover:text-[#592AC7] transition duration-300 py-2 px-1 block border-b-2 ${
                isActive("/about-us") ? "text-[#592AC7] border-[#592AC7]" : "border-transparent"
              }`}
            >
              About Us
            </Link>
          </li>

          {navLinks.map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleDropdownOpen(menu.label)}
              onMouseLeave={closeDropdown}
            >
              <button 
                className={`flex items-center whitespace-nowrap py-2 px-1 border-b-2 transition duration-300 ${
                  isDropdownActive(menu.links) ? "text-[#592AC7] border-[#592AC7]" : "hover:text-[#592AC7] border-transparent hover:border-[#592AC7]"
                }`}
              >
                {menu.label} <IoMdArrowDropdown className="ml-1" />
              </button>
              <AnimatePresence>
                {openDropdown === menu.label && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg p-2 rounded-md z-10"
                  >
                    {menu.links.map((link, i) => (
                      <li key={i}>
                        <Link 
                          href={link.path} 
                          onClick={closeDropdown}
                          className={`block py-2 px-4 rounded-md ${
                            isActive(link.path) 
                              ? "bg-[#592AC7]/10 text-[#592AC7]" 
                              : "hover:bg-gray-100 hover:text-[#592AC7]"
                          } transition duration-300`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Desktop Search & Donate */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative flex bg-gray-100 p-2 rounded-[15px] items-center hover:shadow-md transition duration-300">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none pl-2 w-32 md:w-40 lg:w-48 xl:w-60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Display Search Results */}
            {filteredResults.length > 0 && (
              <ul className="absolute top-12 left-0 w-full bg-white shadow-md rounded-md max-h-60 overflow-auto z-10">
                {filteredResults.map((result, index) => (
                  <li 
                    key={index} 
                    className="p-2 hover:bg-[#592AC7]/10 hover:text-[#592AC7] cursor-pointer transition duration-300" 
                    onClick={() => handleResultClick(result.path)}
                  >
                    {result.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Button href="/donate" className="hover:bg-[#592AC7]/90 transition duration-300">Donate</Button>
        </div>
      </nav>

      {/* Mobile Search Bar - Conditionally Displayed */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden flex py-3 bg-white"
          >
            <div className="relative flex-1 flex bg-gray-100 p-2 rounded-[15px] items-center shadow-sm">
              <FiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none pl-2 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* Display Search Results */}
              {filteredResults.length > 0 && (
                <ul className="absolute top-12 left-0 w-full bg-white shadow-md rounded-md max-h-60 overflow-auto z-10">
                  {filteredResults.map((result, index) => (
                    <li 
                      key={index} 
                      className="p-2 hover:bg-[#592AC7]/10 hover:text-[#592AC7] cursor-pointer transition duration-300" 
                      onClick={() => handleResultClick(result.path)}
                    >
                      {result.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden flex flex-col space-y-2 py-4 bg-white overflow-y-auto max-h-[80vh]"
          >
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                isActive("/") ? "bg-[#592AC7]/10 text-[#592AC7]" : "hover:bg-gray-100 hover:text-[#592AC7]"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about-us" 
              onClick={closeMobileMenu}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                isActive("/about-us") ? "bg-[#592AC7]/10 text-[#592AC7]" : "hover:bg-gray-100 hover:text-[#592AC7]"
              }`}
            >
              About Us
            </Link>

            {navLinks.map((menu, index) => (
              <div key={index} className="flex flex-col">
                <button 
                  onClick={() => handleDropdownOpen(menu.label)} 
                  className={`flex items-center justify-between w-full text-left px-4 py-2 rounded-md transition duration-300 ${
                    isDropdownActive(menu.links) ? "bg-[#592AC7]/10 text-[#592AC7]" : "hover:bg-gray-100 hover:text-[#592AC7]"
                  }`}
                >
                  <span>{menu.label}</span>
                  <IoMdArrowDropdown className={`transition-transform duration-300 ${openDropdown === menu.label ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === menu.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="ml-4 mt-1 space-y-1"
                    >
                      {menu.links.map((link, i) => (
                        <li key={i}>
                          <Link 
                            href={link.path} 
                            onClick={closeMobileMenu}
                            className={`block px-4 py-2 rounded-md transition duration-300 ${
                              isActive(link.path) 
                                ? "bg-[#592AC7]/10 text-[#592AC7]" 
                                : "hover:bg-gray-100 hover:text-[#592AC7]"
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="px-4 pt-2">
              <Button href="/donate" className="w-full hover:bg-[#592AC7]/90 transition duration-300">Donate</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;