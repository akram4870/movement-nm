import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MoveMate</span>
            <img className="h-6 w-auto" src="logo.png" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className={`text-sm font-semibold leading-6 ${isActiveRoute('/') ? 'text-gray-900 underline' : 'text-gray-900'}`}>
            Home
          </Link>
          <Link to="/aboutus" className={`text-sm font-semibold leading-6 ${isActiveRoute('/aboutus') ? 'text-gray-900 underline' : 'text-gray-900'}`}>
            About Us
          </Link>
          <Link to="/contact" className={`text-sm font-semibold leading-6 ${isActiveRoute('/contact') ? 'text-gray-900 underline' : 'text-gray-900'}`}>
            Contact
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MoveMate</span>
              <img
                className="h-6 w-auto"
                src="logo.png"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActiveRoute('/') ? 'text-gray-900 underline' : 'text-gray-900'} hover:bg-gray-50`}
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActiveRoute('/aboutus') ? 'text-gray-900 underline' : 'text-gray-900'} hover:bg-gray-50`}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActiveRoute('/contact') ? 'text-gray-900 underline' : 'text-gray-900'} hover:bg-gray-50`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
