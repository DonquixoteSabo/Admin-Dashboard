import { Link } from 'react-router-dom';
//components
import { Navigation } from 'components/organism/Navigation';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
`;

export const MainTemplate: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <div>{children}</div>
    </Wrapper>
  );
};
