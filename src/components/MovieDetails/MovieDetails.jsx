import { NavLink, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';

export const MovieDetails = ({
  data: { title, backdrop_path, overview, vote_average },
}) => {
  const buildLinkClass = ({ isActive }) => {
    return isActive ? css.isActive : css.link;
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      <div className={css.mainbox}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
            height={350}
            width={550}
          />
        </div>
        <div>
          <p className={css.info}>
            Ranking:{' '}
            <span className={css.infoValue}>
              {(Math.round(vote_average * 100) / 100).toString()}
            </span>
          </p>
          <p className={css.info}>Date: </p>
        </div>
      </div>
      <p className={css.overviewTitle}>{`Overview of "${title}":`}</p>
      <p className={css.overview}>{overview}</p>
      <div className={css.links}>
        <NavLink to={`cast`} className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to={`reviews`} className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
