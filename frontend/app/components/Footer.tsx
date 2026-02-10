export default function Footer() {
  return (
    <footer className="w-full border-t border-[#f1f4f0] py-10">
      <div className="max-w-[1900px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 text-[#668863]">
            <span className="text-sm font-medium">&copy; 2026 EquiFit. All rights reserved.</span>
        </div>
        <div className="flex gap-8">
            <a className="text-sm text-[#668863] hover:text-primary" href="#">Privacy Policy</a>
            <a className="text-sm text-[#668863] hover:text-primary" href="#">Terms of Service</a>
            <a className="text-sm text-[#668863] hover:text-primary" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
