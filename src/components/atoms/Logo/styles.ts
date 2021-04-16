import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray1};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 50px;
  p {
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  .icon-background {
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 32px;
    display: grid;
    place-items: center;
    color: white;
    font-size: 20px;
  }
`;
