import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
    { label: "Courses", path: "/Courses" },
  { label: "Contact", path: "/contact" },
    { label: "Services", path: "/services" },
  { label: "Login / Signup", path: "/login" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-xl font-bold tracking-wide">
          My App
        </NavLink>

        <ul className="flex items-center gap-4 text-sm font-medium sm:gap-6 sm:text-base">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `rounded-md px-2 py-1 transition duration-200 hover:bg-white/10 hover:text-white ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
