import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-column: 1/-1;
  height: 500px;
  margin-top: 30px;
  background-color: white;
  border-radius: 20px;
  padding: 0 0 0 20px;
  hgroup {
    padding: 40px 25px 20px;
  }
  h1 {
    padding-bottom: 10px;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.black};
  }
  h6 {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.gray3};
  }
  ul {
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
