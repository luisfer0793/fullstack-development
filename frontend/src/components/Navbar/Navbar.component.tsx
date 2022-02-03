import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-slate-100">
      <div className="flex container mx-auto items-center justify-between">
        <div>
          <Link to="/" className="font-serif font-bold">
            LOGO
          </Link>
        </div>
        <ul className="flex items-center justify-center">
          <li className="mx-4">
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                `relative block py-6 text-xs uppercase before:block before:h-px before:w-full before:bg-amber-500 before:absolute before:bottom-0 before:scale-x-0 before:transition-transform before:ease-linear before:duration-200 hover:before:scale-x-100 ${
                  isActive && `text-amber-500`
                }`
              }
            >
              Servicios
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `relative block py-6 text-xs uppercase before:block before:h-px before:w-full before:bg-amber-500 before:absolute before:bottom-0 before:scale-x-0 before:transition-transform before:ease-linear before:duration-200 hover:before:scale-x-100 ${
                  isActive && `text-amber-500`
                }`
              }
            >
              Blog
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `relative block py-6 text-xs uppercase before:block before:h-px before:w-full before:bg-amber-500 before:absolute before:bottom-0 before:scale-x-0 before:transition-transform before:ease-linear before:duration-200 hover:before:scale-x-100 ${
                  isActive && `text-amber-500`
                }`
              }
            >
              Portafolio
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative block py-6 text-xs uppercase before:block before:h-px before:w-full before:bg-amber-500 before:absolute before:bottom-0 before:scale-x-0 before:transition-transform before:ease-linear before:duration-200 hover:before:scale-x-100 ${
                  isActive && `text-amber-500`
                }`
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>
        <div>
          <span className="font-serif font-bold">LOGIN</span>
        </div>
      </div>
    </nav>
  );
};
