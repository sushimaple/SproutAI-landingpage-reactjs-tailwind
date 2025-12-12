export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="logo.png"
                alt="company-logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <span className="text-lg sm:text-xl md:text:2xl font-medium">
              <span className="bg-gradient-to-r from-pink-300 via-blue-300 to-indigo-500 inline-block text-transparent bg-clip-text">
                Sprout\
              </span>
              <span className="text-indigo-600">AI</span>
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
