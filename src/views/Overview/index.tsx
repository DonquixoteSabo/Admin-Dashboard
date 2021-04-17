//components
import { Header } from 'components/atoms/Header';
import { Cards } from 'components/atoms/Cards';
import { Trends } from 'components/molecules/Trends';
//styles
import { Wrapper } from './styles';

export const Overview = () => {
  return (
    <Wrapper>
      <div className="title">
        <Header>Overview page</Header>
      </div>
      <Cards />
      <Trends />
    </Wrapper>
  );
};
