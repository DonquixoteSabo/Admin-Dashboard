import { Link } from 'react-router-dom';
//components
import {
  Title,
  InnerWrapper,
} from 'components/organism/TicketsAndTasks/styles';
import { TasksList } from 'components/atoms/TasksList';

export const Tasks = () => {
  return (
    <InnerWrapper>
      <Title>Tasks</Title>
      <Link className="link" to="/tasks">
        View All
      </Link>
      <h6>
        <small>Today</small>
      </h6>
      <TasksList />
    </InnerWrapper>
  );
};
