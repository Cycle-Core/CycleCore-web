// src/app/page.tsx
export default function Home() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-text-dark mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-soft">
          <h3 className="text-lg font-semibold text-text-dark mb-2">Total Users</h3>
          <p className="text-4xl font-extrabold text-accent-blue">1,234</p>
          <p className="text-gray-medium mt-2">+5% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-soft">
          <h3 className="text-lg font-semibold text-text-dark mb-2">Revenue</h3>
          <p className="text-4xl font-extrabold text-green-600">$45,678</p>
          <p className="text-gray-medium mt-2">+12% from last month</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-soft">
          <h3 className="text-lg font-semibold text-text-dark mb-2">New Orders</h3>
          <p className="text-4xl font-extrabold text-purple-600">89</p>
          <p className="text-gray-medium mt-2">Yesterday</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-soft border border-gray-soft">
        <h3 className="text-2xl font-bold text-text-dark mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-accent-blue text-white rounded-lg shadow-soft hover:bg-accent-hover-blue transition-colors duration-200">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            Add New Item
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-200 text-text-dark rounded-lg shadow-soft hover:bg-gray-300 transition-colors duration-200">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 12h-2.25m-4.5 0H4.5m-3 0V12h3M20.25 12V12h3"></path></svg>
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
} 