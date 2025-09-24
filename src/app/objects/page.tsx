// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-text-dark mb-6">Objects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-soft border border-gray-soft">
            <h3 className="text-lg font-semibold text-text-dark mb-2">Box {idx + 1}</h3>
            <p className="text-gray-medium">This is some dummy data for box {idx + 1}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}