import { Items } from './styles';
//types
import { TodaysData } from 'types/TodaysData';

interface Props {
  todaysData: TodaysData[];
}

export const TodaysInformation = ({ todaysData }: Props) => {
  return (
    <ul>
      {todaysData.map(({ title, value }) => (
        <Items key={title}>
          <p className="title">{title}</p>
          <p className="value">{value}</p>
        </Items>
      ))}
    </ul>
  );
};
