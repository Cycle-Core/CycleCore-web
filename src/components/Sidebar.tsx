"use client";

// src/components/Sidebar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router'; // For active link styling, if you were using pages router. For app router, we'll use usePathname from next/navigation
import { usePathname } from 'next/navigation'; // For app router

const Sidebar = () => {
  const pathname = usePathname(); // Get current path for active link styling

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Objects', href: '/objects' }, // New example page
    { name: 'Settings', href: '/settings' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Messages', href: '/messages' },   // New example page
  ];

  return (
    <aside className="w-64 bg-gray-900 text-text-light p-5 h-full flex flex-col shadow-medium rounded-r-xl">
      <div className="flex items-center justify-center mb-8">
        <span className="text-3xl font-extrabold text-accent-blue">AppLogo</span>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className={`
              flex items-center gap-3 py-2.5 px-4 rounded-lg
              transition-all duration-200 ease-in-out
              ${pathname === item.href
              ? 'bg-accent-blue text-white shadow-soft'
              : 'hover:bg-gray-700 hover:text-white'
            }
            `}
          >
            {/* You can add icons here using react-icons or similar */}
            <span className="text-lg">{item.name}</span>
          </Link>
        ))}
      </nav>
      {/* Optional: Add a section for user profile or logout */}
      <div className="mt-auto pt-4 border-t border-gray-700">
        <Link href="/profile" className="flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-700 hover:text-white">
          {/* Example User Icon */}
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span className="text-lg">Profile</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;