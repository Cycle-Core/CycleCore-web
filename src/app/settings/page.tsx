// src/app/settings/page.tsx
export default function SettingsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Application Settings</h1>
      <p className="text-gray-600">Manage your application settings here.</p>
      <form className="mt-4 space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Settings</button>
      </form>
    </div>
  );
}