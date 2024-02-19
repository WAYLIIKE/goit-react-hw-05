import { NavLink } from 'react-router-dom';
import css from './TrendingsListItem.module.css';

export const TrendingsListItem = ({
  data: { title, id, backdrop_path, release_date },
}) => {
  return (
    <li className={css.container}>
      <NavLink to={`/movies/${id}`}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            width={240}
            height={140}
            className={css.img}
          />
          <p className={css.title}>
            {title}{' '}
            <span className={css.span}>{release_date.split('-')[0]}</span>
          </p>
        </div>
      </NavLink>
    </li>
  );
};
