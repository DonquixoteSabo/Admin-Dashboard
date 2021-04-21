import styled from 'styled-components';

export const List = styled.ul`
  grid-column: 1/-1;
  margin-top: 20px;
  .input-wrapper {
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
    padding: 16px 20px;
    &:nth-last-child(1) {
      border-bottom: none;
    }
    div {
      display: flex;
      align-items: center;
      p {
        margin-left: 10px;
      }
    }
  }
`;
