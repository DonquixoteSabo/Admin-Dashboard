import styled from 'styled-components';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
const data = [
  { hour: '0', sells: 10 },
  { hour: '1', sells: 13 },
  { hour: '2', sells: 15 },
  { hour: '3', sells: 11 },
  { hour: '4', sells: 40 },
  { hour: '5', sells: 35 },
  { hour: '6', sells: 30 },
  { hour: '7', sells: 27 },
  { hour: '8', sells: 25 },
  { hour: '9', sells: 21 },
  { hour: '10', sells: 18 },
  { hour: '11', sells: 21 },
  { hour: '12', sells: 24 },
  { hour: '13', sells: 28 },
  { hour: '14', sells: 30 },
  { hour: '15', sells: 31 },
  { hour: '16', sells: 32 },
  { hour: '17', sells: 36 },
  { hour: '18', sells: 40 },
  { hour: '19', sells: 42 },
  { hour: '20', sells: 38 },
  { hour: '21', sells: 36 },
  { hour: '22', sells: 35 },
];

const Wrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-top: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.gray4};
`;

export const Chart = () => {
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
