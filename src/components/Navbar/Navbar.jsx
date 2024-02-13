import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';

export const Navbar = () => {
  const buildLinkClass = ({ isActive }) => {
    return isActive ? css.isActive : css.link;
  };

  return (
    <div>
      <header>
        <nav>
          <ul className={css.container}>
            <li className={css.item}>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/movies" className={buildLinkClass}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
