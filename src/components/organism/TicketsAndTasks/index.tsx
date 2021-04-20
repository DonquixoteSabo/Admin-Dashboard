import { Tickets } from 'components/molecules/TIckets';
import { Tasks } from 'components/molecules/Tasks';
import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-column: 1/-1;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;
export const Title = styled.header`
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 20px 20px 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

export const InnerWrapper = styled.article`
  flex-basis: 48%;
  border: 0.5px solid ${({ theme }) => theme.colors.gray4};
  background-color: #fff;
  color: ${({ theme }) => theme.colors.black};
  padding-top: 10px;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto 1fr;
  font-weight: 500;

  .link {
    text-decoration: none;
    padding: 20px 20px 0;
    color: ${({ theme }) => theme.colors.blue};
  }
  h6 {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 20px 20px 0;
    small {
      color: ${({ theme }) => theme.colors.gray1};
    }
  }
`;

export const TicketsAndTasks = () => {
  return (
    <Wrapper>
      <Tickets />
      <Tasks />
    </Wrapper>
  );
};
