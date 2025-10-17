// src/app/settings/page.tsx
import React from 'react'

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900">Settings</h2>
          <p className="mt-1 text-sm text-gray-500">Account and workspace preferences</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Workspace name</p>
                <p className="text-xs text-gray-500">CycleCore</p>
              </div>
              <button className="px-3 py-2 rounded-md border border-gray-200 text-sm">Edit</button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Notifications</p>
                <p className="text-xs text-gray-500">Email updates</p>
              </div>
              <button className="px-3 py-2 rounded-md border border-gray-200 text-sm">Manage</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}