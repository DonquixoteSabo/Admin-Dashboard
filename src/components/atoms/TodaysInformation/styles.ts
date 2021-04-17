import styled from 'styled-components';

export const Items = styled.li`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  font-size: ${({ theme }) => theme.fontSize.m};
  .title {
    padding: 0;
    color: ${({ theme }) => theme.colors.gray3};
    font-weight: 500;
  }
  .value {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  &:nth-child(1) {
    border-top-right-radius: 20px;
  }
  &:nth-last-child(1) {
    border-bottom-right-radius: 20px;
  }
`;
