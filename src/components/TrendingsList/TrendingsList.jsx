import { TrendingsListItem } from '../TrendingsListItem/TrendingsListItem';
import css from './TrendingsList.module.css';

export const TrendingsList = ({ data }) => {
  return (
    <ul className={css.container}>
      {data.map(item => (
        <TrendingsListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};
