import styled from 'styled-components';

interface StatusProps {
  status: 'new' | 'urgent' | 'default';
}

export const Status = styled.div<StatusProps>`
  color: ${({ status, theme }) =>
    status === 'new' || status === 'urgent' ? 'white' : theme.colors.gray1};
  padding: 5px 8px;
  border-radius: 6px;
  background-color: ${({ theme, status }) => {
    if (status === 'new') return '#29CC97';
    if (status === 'urgent') return '#FEC400';
    return '#F0F1F7';
  }};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
