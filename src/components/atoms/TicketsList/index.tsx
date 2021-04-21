//styles
import { List } from './styles';
//types
import { Ticket } from 'types/Ticket';

export const TicketsList = () => {
  const data: Ticket[] = [
    {
      text: 'Waiting on Feature Reques',
      value: 4238,
    },
    {
      text: 'Awaiting Customer Response',
      value: 1005,
    },
    {
      text: 'Awaiting Developer Fix',
      value: 914,
    },
    {
      text: 'Pending',
      value: 281,
    },
  ];
  return (
    <List>
      {data.map(({ text, value }) => (
        <li key={text}>
          <p>{text}</p>
          <small>{value}</small>
        </li>
      ))}
    </List>
  );
};
