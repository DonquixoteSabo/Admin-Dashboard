import { useState, useEffect } from 'react';
import axios from 'axios';
//components
import { Chart } from 'components/molecules/Chart';
import { TodaysInformation } from 'components/atoms/TodaysInformation';
//styles
import { Wrapper } from './styles';
//types
import { Data } from 'types/data';
import { TodaysData } from 'types/TodaysData';

export const Trends = () => {
  const [data, setData] = useState<Data[]>([]);
  const [todaysData, setTodaysData] = useState<TodaysData[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios('/overview');
      const { data, todaysData } = response.data;
      setData(data);
      setTodaysData(todaysData);
    };
    fetch();
  }, []);

  return (
    <Wrapper>
      <hgroup>
        <h1>Today's trends</h1>
        <h6>as of 17 April 2021, 10:10 AM</h6>
      </hgroup>
      {data.length > 0 ? <Chart data={data} /> : <h1>Loading...</h1>}
      {todaysData.length > 0 ? (
        <TodaysInformation todaysData={todaysData} />
      ) : (
        <h1>Loading...</h1>
      )}
    </Wrapper>
  );
};
