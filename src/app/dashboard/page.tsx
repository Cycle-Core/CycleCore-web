// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-text-dark mb-6">Your Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-soft">
          <h3 className="text-lg font-semibold text-text-dark mb-2">Project Progress</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div className="bg-accent-blue h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-sm text-gray-medium">70% Complete</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-soft">
          <h3 className="text-lg font-semibold text-text-dark mb-2">Team Activity</h3>
          <ul className="list-disc list-inside text-gray-medium space-y-1">
            <li>John Doe updated a task.</li>
            <li>Jane Smith started a new project.</li>
            <li>Mike Ross completed a review.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-soft">
          <h3 className="text-lg font-semibold text-text-dark mb-2">Upcoming Deadlines</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center text-gray-medium">
              <span>Report Submission</span>
              <span className="text-sm font-semibold text-red-500">2 days</span>
            </li>
            <li className="flex justify-between items-center text-gray-medium">
              <span>Client Meeting</span>
              <span className="text-sm font-semibold text-orange-500">1 week</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}