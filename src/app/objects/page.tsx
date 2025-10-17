// ...existing code...
import React from 'react'

export default function ObjectsPage() {
  const projects = [
    { id: 1, name: 'Project A', status: 'Active' },
    { id: 2, name: 'Project B', status: 'Planning' },
    { id: 3, name: 'Project C', status: 'Review' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900">Projects</h2>
          <p className="mt-1 text-sm text-gray-500">All tracked projects in a minimal list</p>

          <ul className="mt-4 divide-y divide-gray-100">
            {projects.map((p) => (
              <li key={p.id} className="py-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{p.name}</p>
                  <p className="text-xs text-gray-500">{p.status}</p>
                </div>
                <div className="text-sm text-gray-700">View</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
// ...existing code...