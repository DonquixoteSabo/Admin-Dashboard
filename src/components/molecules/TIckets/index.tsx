import { useState } from 'react';
import { Link } from 'react-router-dom';
//components
import {
  Title,
  InnerWrapper,
} from 'components/organism/TicketsAndTasks/styles';
import { TicketsList } from 'components/atoms/TicketsList';

export const Tickets = () => {
  const [group] = useState('Support');

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
      <TicketsList />
    </InnerWrapper>
  );
};
