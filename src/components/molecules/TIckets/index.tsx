import { useState } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components';

import { Title, InnerWrapper } from 'components/organism/TicketsAndTasks';

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
      <ul>
        <li>
          <p>Tekst</p>
          <small>13545</small>
        </li>
        <li>
          <p>Tekst</p>
          <small>255554</small>
        </li>
        <li>
          <p>Tekst</p>
          <small>3543</small>
        </li>
      </ul>
    </InnerWrapper>
  );
};
