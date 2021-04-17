import styled from 'styled-components';

export const Wrapper = styled.header`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  text-shadow: 2px 2px 4px ${({ theme }) => theme.colors.black};
`;
