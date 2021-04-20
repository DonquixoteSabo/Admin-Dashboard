// import { useState } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components';
import { Title, InnerWrapper } from 'components/organism/TicketsAndTasks';

export const Tasks = () => {
  return (
    <InnerWrapper>
      <Title>Tasks</Title>
      <Link className="link" to="/tasks">
        View All
      </Link>
      <h6>
        <small>Today</small>
      </h6>
      <ul>
        <li>
          <p>Tekst</p>
          <small>1</small>
        </li>
        <li>
          <p>Tekst</p>
          <small>h</small>
        </li>
        <li>
          <p>Tekst</p>
          <small>36</small>
        </li>
      </ul>
    </InnerWrapper>
  );
};
