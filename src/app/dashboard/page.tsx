import React from 'react'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">A calm, focused view of current work</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center px-3 py-2 rounded-md border border-gray-200 bg-white text-sm text-gray-700 hover:shadow-sm focus:outline-none"
              aria-label="filter"
            >
              Filter
            </button>

            <button
              className="inline-flex items-center px-3 py-2 rounded-md bg-gray-900 text-white text-sm hover:opacity-95 focus:outline-none"
              aria-label="new"
            >
              New
            </button>
          </div>
        </header>

        {/* Summary cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { title: 'Projects', value: '12' },
            { title: 'Active Tasks', value: '34' },
            { title: 'Team', value: '8 members' },
            { title: 'Overall Progress', value: '70%' },
          ].map((card) => (
            <div key={card.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">{card.title}</p>
                  <p className="text-lg font-medium text-gray-900">{card.value}</p>
                </div>
                <div className="p-2 bg-gray-100 rounded-md" aria-hidden>
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Project Progress</h3>
            <p className="text-sm text-gray-500 mb-4">Sprint health and task breakdown</p>

            <div className="space-y-4">
              {[
                { name: 'Frontend overhaul', pct: 85, color: 'bg-gray-900' },
                { name: 'API integration', pct: 60, color: 'bg-gray-700' },
                { name: 'QA & Testing', pct: 40, color: 'bg-gray-500' },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between">
                  <div className="w-3/5">
                    <p className="text-sm text-gray-700">{p.name}</p>
                    <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                      <div className={`${p.color} h-2 rounded-full`} style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{p.pct}%</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Upcoming Deadlines</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-900">Report Submission</p>
                  <p className="text-xs text-gray-500">Due in 2 days</p>
                </div>
                <span className="text-sm font-semibold text-red-500">2d</span>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-900">Client Meeting</p>
                  <p className="text-xs text-gray-500">Next week</p>
                </div>
                <span className="text-sm font-semibold text-orange-500">1w</span>
              </li>
              <li className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-900">Beta Release</p>
                  <p className="text-xs text-gray-500">In 3 weeks</p>
                </div>
                <span className="text-sm font-semibold text-green-600">3w</span>
              </li>
            </ul>
          </aside>
        </section>

        <section className="mt-8">
          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Team Activity</h3>
            <ul className="divide-y divide-gray-100 text-sm text-gray-700">
              {[
                { name: 'John Doe', action: 'updated a task', time: '2 hours ago', project: 'Project A' },
                { name: 'Jane Smith', action: 'created a project', time: '1 day ago', project: 'Project B' },
                { name: 'Mike Ross', action: 'completed review', time: '3 days ago', project: 'Project C' },
              ].map((a) => (
                <li key={a.name} className="py-3 flex items-start justify-between">
                  <div>
                    <p className="font-medium text-gray-900">
                      {a.name} <span className="text-xs text-gray-500">{a.action}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{a.time}</p>
                  </div>
                  <div className="text-xs text-gray-500">{a.project}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}