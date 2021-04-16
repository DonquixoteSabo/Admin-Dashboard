import { Navigation } from 'components/organism/Navigation';
import { Overview } from 'components/organism/Overview';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
`;

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Navigation />
      <Overview />
    </Wrapper>
  );
};
