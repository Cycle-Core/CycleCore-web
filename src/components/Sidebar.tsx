"use client";

// src/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/objects', label: 'Projects' },
  { href: '/settings', label: 'Settings' },
];

export default function Sidebar() {
  const path = usePathname() || '/dashboard';

  return (
    <aside className="w-64 hidden md:block bg-white border-r border-gray-100 h-[100vh]">
      <div className="h-full flex flex-col px-4 py-6">
        <div className="mb-6">
          <div className="text-2xl font-semibold text-gray-900">CycleCore</div>
          <div className="text-xs text-gray-500">Minimal workspace</div>
        </div>

        <nav className="flex-1 space-y-2 my-4">
          {nav.map((item) => {
            const active = path === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-sm ${active ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-6 text-xs text-gray-400">v1.0</div>
      </div>
    </aside>
  );
}