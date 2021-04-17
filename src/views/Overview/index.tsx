import { Header } from 'components/atoms/Header';
import { Chart } from 'components/molecules/Chart';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 50% 50%;
  padding: 35px 40px;
  .title {
    grid-column: 1/-1;
    padding: 20px 0;
  }
  .cards {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    grid-column: 1/-1;
  }
`;

export const Card = styled.li`
  width: 22%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  .title {
    padding: 0;
    color: ${({ theme }) => theme.colors.gray3};
    font-weight: 500;
  }
  .value {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const Data = styled.section`
  margin-top: 30px;
  background-color: white;
  grid-column: 1/-1;
  height: 500px;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  border-radius: 20px;
  hgroup {
    padding: 30px 25px;
  }
  h1 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding-bottom: 10px;
  }
  h6 {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.gray3};
  }
  ul {
    width: 100%;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
  }
`;

interface CardType {
  title: string;
  value: number;
}

const data: CardType[] = [
  {
    title: 'Unresolved',
    value: 60,
  },
  {
    title: 'Overdue',
    value: 16,
  },
  {
    title: 'Open',
    value: 43,
  },
  {
    title: 'On hold',
    value: 64,
  },
];

const todaysData: { title: string; value: number | string }[] = [
  {
    title: 'Resolved',
    value: 449,
  },
  {
    title: 'Received',
    value: 426,
  },
  {
    title: 'Average first response time',
    value: '33m',
  },
  {
    title: 'Average response time',
    value: '3h 8min',
  },
  {
    title: 'Resolution within SLA',
    value: '94%',
  },
];

const Items = styled.li`
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

export const Overview = () => {
  return (
    <Wrapper>
      <div className="title">
        <Header>Overview page</Header>
      </div>
      <ul className="cards">
        {data.map(({ title, value }) => (
          <Card key={title}>
            <p className="title">{title}</p>
            <p className="value">{value}</p>
          </Card>
        ))}
      </ul>
      <Data>
        <hgroup>
          <h1>Today's trends</h1>
          <h6>as of 17 April 2021, 10:10 AM</h6>
        </hgroup>
        <Chart />
        <ul>
          {todaysData.map(({ title, value }) => (
            <Items key={title}>
              <p className="title">{title}</p>
              <p className="value">{value}</p>
            </Items>
          ))}
        </ul>
      </Data>
    </Wrapper>
  );
};
