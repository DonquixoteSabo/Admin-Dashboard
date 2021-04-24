import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const Wrapper = styled.div`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  background-color: #f0f1f7;
  color: ${({ theme }) => theme.colors.gray3};
  font-size: 22px;
`;

interface Props {
  handleAddTask: () => void;
}

export const AddButton = ({ handleAddTask }: Props) => (
  <Wrapper onClick={handleAddTask}>
    <AiOutlinePlus />
  </Wrapper>
);
