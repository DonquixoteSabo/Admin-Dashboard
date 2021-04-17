import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-top: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.gray4};
`;
