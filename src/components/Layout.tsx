// src/components/Layout.tsx
"use client"; // Add this line if you didn't have it, as useState is a client-side hook
import React, { useState } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-primary-light text-text-dark">
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile sidebar toggle button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-5 left-5 z-50 p-2 rounded-full bg-accent-blue text-white shadow-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue transition-all duration-200 ease-in-out hover:bg-accent-hover-blue"
        aria-label="Toggle sidebar"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {sidebarOpen ? (
            <path d="M6 18L18 6M6 6l12 12"></path> // Close icon
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16"></path> // Hamburger icon
          )}
        </svg>
      </button>

      {/* Sidebar - Visible on large screens, hidden/toggled on small screens */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <Sidebar />
      </div>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto p-6 lg:p-8">
        {/* Optional: Add a simple top bar for larger screens */}
        <header className="hidden lg:flex justify-between items-center pb-6 mb-6 border-b border-gray-soft">
          <h1 className="text-3xl font-bold text-text-dark">Welcome Back!</h1>
          <div className="flex items-center gap-4">
            {/* You can add a search bar or user avatar here */}
            <input type="text" placeholder="Search..." className="p-2 border border-gray-soft rounded-lg focus:outline-none focus:ring-1 focus:ring-accent-blue" />
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold">JD</div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

export default Layout;