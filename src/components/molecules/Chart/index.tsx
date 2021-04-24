import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { useState, useEffect } from 'react';
//styles
import { Wrapper } from './styles';
//hooks
import { useChart } from 'hooks/useChart';

export const Chart = () => {
  const [data, setData] = useState([]);
  const { getData } = useChart();

  useEffect(() => {
    (async () => {
      const data = await getData();
      setData(data);
    })();
  }, [getData]);

  return data.length > 0 ? (
    <Wrapper>
      <LineChart width={1000} height={400} data={data}>
        <Line
          strokeWidth={2}
          type="monotone"
          dataKey="sells"
          stroke="#3751FF"
          dot={false}
          activeDot={{ stroke: '#3751FF', strokeWidth: 3 }}
        />
        <Tooltip />
        <CartesianGrid stroke="#ccc" vertical={false} />
        <XAxis
          padding={{ left: 20, right: 20 }}
          dataKey="hour"
          axisLine={false}
          stroke="#9FA2B4"
        />
        <YAxis orientation="right" axisLine={false} stroke="#9FA2B4" />
      </LineChart>
    </Wrapper>
  ) : (
    <h1>Loading...</h1>
  );
};
