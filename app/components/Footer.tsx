export default function Footer() {
  return (
    <footer className="card w-full border-t py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 flex justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} Your Name</p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </footer>
  );
}