export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Your Name</p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </footer>
  );
}