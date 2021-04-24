//components
import { Chart } from 'components/molecules/Chart';
import { TodaysInformation } from 'components/atoms/TodaysInformation';
//styles
import { Wrapper } from './styles';

export const Trends = () => {
  return (
    <Wrapper>
      <hgroup>
        <h1>Today's trends</h1>
        <h6>as of 17 April 2021, 10:10 AM</h6>
      </hgroup>
      <Chart />
      <TodaysInformation />
    </Wrapper>
  );
};
