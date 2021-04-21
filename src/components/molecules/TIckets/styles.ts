import styled from 'styled-components';

export const List = styled.ul`
  grid-column: 1/-1;
  margin-top: 20px;
  li {
    display: flex;
    justify-content: space-between;
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
