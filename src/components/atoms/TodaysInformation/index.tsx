import { useState, useEffect } from 'react';
import { Items } from './styles';
//types
import { TodaysData } from 'types/TodaysData';
import { useTodaysData } from 'hooks/useTodaysData';

export const TodaysInformation = () => {
  const [todaysData, setTodaysData] = useState<TodaysData[]>([]);
  const { getData } = useTodaysData();

  useEffect(() => {
    (async () => {
      const data = await getData();
      setTodaysData(data);
    })();
  }, [getData]);

  return (
    <ul>
      {todaysData.length > 0 ? (
        todaysData.map(({ title, value }) => (
          <Items key={title}>
            <p className="title">{title}</p>
            <p className="value">{value}</p>
          </Items>
        ))
      ) : (
        <h1>Loading</h1>
      )}
      {}
    </ul>
  );
};
