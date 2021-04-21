import { Tickets } from 'components/molecules/Tickets';
import { Tasks } from 'components/molecules/Tasks';
//styles
import { Wrapper } from './styles';
export const TicketsAndTasks = () => {
  return (
    <Wrapper>
      <Tickets />
      <Tasks />
    </Wrapper>
  );
};
