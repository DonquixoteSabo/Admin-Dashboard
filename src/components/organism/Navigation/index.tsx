import styled from 'styled-components';
import { IoAnalyticsOutline } from 'react-icons/io5';
const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 20px 0;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
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

export const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <div className="icon-background">
          <IoAnalyticsOutline />
        </div>
        <p>Dashboard Kit</p>
      </Logo>
      <ul>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
      </ul>
    </Wrapper>
  );
};
