// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#F8FAFC', // Lighter background for main content
        'primary-dark': '#1F2937', // Darker background for sidebar (still clean)
        'secondary-light': '#E0F2FE', // Light blue for highlights
        'secondary-dark': '#1e1e1fff', // Darker blue for sidebar highlights
        'accent-blue': '#3B82F6', // A vibrant blue for accents
        'accent-hover-blue': '#2563EB', // Darker blue for hover states
        'text-dark': '#374151', // Dark text for readability
        'text-light': '#E5E7EB', // Light text for dark backgrounds
        'gray-soft': '#E5E7EB', // Soft gray for borders/dividers
        'gray-medium': '#9CA3AF', // Medium gray for secondary text
        'gray-strong': '#6B7280', // Stronger gray for specific elements
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}