import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 20px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray2};
  width: 100%;
  text-align: center;
  display: block;
  padding: 20px;
  transition: 0.3s;
  border-left: 4px solid transparent;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  &.active {
    background-color: ${({ theme }) => theme.colors.gray3};
    border-left: 4px solid #dde2ff;
  }
  &:hover {
    text-decoration: underline;
  }
`;
