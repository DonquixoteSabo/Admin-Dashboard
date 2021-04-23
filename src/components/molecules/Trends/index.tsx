import { useState, useEffect } from 'react';
import axios from 'axios';
//components
import { Chart } from 'components/molecules/Chart';
import { TodaysInformation } from 'components/atoms/TodaysInformation';
//styles
import { Wrapper } from './styles';
//types
import { Data } from 'types/data';

export const Trends = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios('/overview');
      const { data } = response.data;
      setData(data);
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
      <TodaysInformation />
    </Wrapper>
  );
};
