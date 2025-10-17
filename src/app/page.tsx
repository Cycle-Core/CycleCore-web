// src/app/page.tsx
import React from 'react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome to CycleCore</h1>
          <p className="mt-2 text-sm text-gray-500">
            Minimal, focused workspace — access projects, activity and settings from the sidebar.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Quick actions</p>
              <div className="mt-3 flex gap-3">
                <button className="px-3 py-2 rounded-md bg-gray-900 text-white text-sm">New Project</button>
                <button className="px-3 py-2 rounded-md border border-gray-200 text-sm">Import</button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Overview</p>
              <p className="mt-2 text-sm text-gray-700">Projects: 12 · Active tasks: 34 · Team: 8</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}