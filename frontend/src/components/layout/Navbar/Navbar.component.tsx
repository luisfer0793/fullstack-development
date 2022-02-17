import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import { useTypedSelector } from 'state/store';

import { setAuthentication } from 'state/slices/authentication.slice';

export const Navbar = () => {
  const { isAuthenticated } = useTypedSelector(state => state.authentication);

  const dispatch = useDispatch();

  const switchAuthenticationHandler = () => {
    dispatch(setAuthentication(!isAuthenticated));
  };

  useEffect(() => {
    console.log('[Navbar]: Render');
  });

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
              to="tours"
              className={({ isActive }) =>
                `relative block py-6 text-xs uppercase before:block before:h-px before:w-full before:bg-amber-500 before:absolute before:bottom-0 before:scale-x-0 before:transition-transform before:ease-linear before:duration-200 hover:before:scale-x-100 ${
                  isActive && `text-amber-500`
                }`
              }
            >
              Tours
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="blog"
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
              to="portfolio"
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
              to="contact"
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
          <span
            className="font-serif font-bold cursor-pointer transition ease-linear duration-150 hover:text-amber-500"
            onClick={switchAuthenticationHandler}
          >
            {isAuthenticated ? 'LOG OUT' : 'LOG IN'}
          </span>
        </div>
      </div>
    </nav>
  );
};
