import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 50% 50%;
  padding: 35px 40px;
  .title {
    grid-column: 1/-1;
    padding: 20px 0;
  }
  .cards {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    grid-column: 1/-1;
  }
`;
