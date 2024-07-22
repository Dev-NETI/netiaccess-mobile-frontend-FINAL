import Dropdown from "@/components/Dropdown";
import { ResponsiveNavButton } from "@/components/ResponsiveNavLink";
import { DropdownButton } from "@/components/DropdownLink";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";
import AppLogo from "@/components/app/AppLogo";

const Navigation = ({ user }) => {
  const { logout } = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-nykBlue ">
      {/* Primary Navigation Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16">
          {/* Settings Dropdown */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Dropdown
              align="right"
              width="48"
              trigger={
                <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                  <div>{user?.name}</div>

                  <div className="ml-1">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              }
            >
              {/* Authentication */}
              <DropdownButton onClick={logout}>Logout</DropdownButton>
            </Dropdown>
          </div>

          {/* Hamburger */}
          <div className="-mr-2 flex  sm:hidden ">
            <button
              onClick={() => setOpen((open) => !open)}
              className="inline-flex  justify-center p-2 rounded-md text-slate-50 hover:text-gray-500 
                             focus:outline-none  focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Navigation Menu */}
        {open && (
          <div className="block sm:hidden">
            {/* Responsive Settings Options */}
            <div className="pt-4 pb-1 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-10 w-10 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <div className="ml-3">
                  <div className="font-medium text-base text-white">
                    {user?.f_name} {user?.l_name}
                  </div>
                  <div className="font-medium text-sm text-white">
                    {user?.email}
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                {/* Authentication */}
                <ResponsiveNavButton onClick={logout}>
                  Logout
                </ResponsiveNavButton>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center items-center p-5">
          <AppLogo />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
