import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-600 shadow shadow-gray-600 w-100 px-8 md:px-auto">
      <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div class="flex items-center">
          <div class="text-indigo-500 md:order-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <span class="ml-2 text-xl font-bold">Newsify 📰</span>
          </div>
        </div>

        <div class="order-2 md:order-3">
          <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
            <a
              href="https://www.instagram.com/20s.hamza/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-gray-300"
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-pink-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-2">20s.hamza</span>
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
