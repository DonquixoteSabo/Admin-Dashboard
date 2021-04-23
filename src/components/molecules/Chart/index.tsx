import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
//styles
import { Wrapper } from './styles';
//types
import { Data } from 'types/data';

interface Props {
  data: Data[];
}

export const Chart = ({ data }: Props) => {
  return (
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
  );
};
