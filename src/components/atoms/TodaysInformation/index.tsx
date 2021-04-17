import { Items } from './styles';
const todaysData: { title: string; value: number | string }[] = [
  {
    title: 'Resolved',
    value: 449,
  },
  {
    title: 'Received',
    value: 426,
  },
  {
    title: 'Average first response time',
    value: '33m',
  },
  {
    title: 'Average response time',
    value: '3h 8min',
  },
  {
    title: 'Resolution within SLA',
    value: '94%',
  },
];

export const TodaysInformation = () => {
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
