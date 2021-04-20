import { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Title, InnerWrapper } from 'components/organism/TicketsAndTasks';
//types
import { Ticket } from 'types/Ticket';

export const List = styled.ul`
  grid-column: 1/-1;
  margin-top: 20px;
  li {
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
    padding: 20px;
    &:nth-last-child(1) {
      border-bottom: none;
    }
    small {
      color: ${({ theme }) => theme.colors.gray3};
    }
  }
`;

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
