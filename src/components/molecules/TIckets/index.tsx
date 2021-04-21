import { useState } from 'react';
import { Link } from 'react-router-dom';
//components
import { Title, InnerWrapper } from 'components/organism/TicketsAndTasks';
//styles
import { List } from './styles';
//types
import { Ticket } from 'types/Ticket';

export const Tickets = () => {
  const [group] = useState('Support');
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
    <InnerWrapper>
      <Title>Unresolved tickets</Title>
      <Link className="link" to="/tickets">
        View details
      </Link>
      <h6>
        <small>Group: </small>
        {group}
      </h6>
      <List>
        {data.map(({ text, value }) => (
          <li key={text}>
            <p>{text}</p>
            <small>{value}</small>
          </li>
        ))}
      </List>
    </InnerWrapper>
  );
};
