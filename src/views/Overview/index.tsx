import { Header } from 'components/atoms/Header';

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
  display: block;
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
    </Wrapper>
  );
};
