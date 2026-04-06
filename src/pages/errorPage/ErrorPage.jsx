import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Decorative Element */}
        <p className="text-6xl font-bold text-indigo-600">404</p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved or deleted.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* Main CTA */}
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
          >
            Go back home
          </a>

          {/* Secondary CTA */}
          <a
            href="/support"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Optional: Simple Illustration or SVG */}
        <div className="mt-16 opacity-20">
          <svg
            className="mx-auto h-24 w-24 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
