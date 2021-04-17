import styled from 'styled-components';

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

export const Cards = () => {
  return (
    <ul className="cards">
      {data.map(({ title, value }) => (
        <Card key={title}>
          <p className="title">{title}</p>
          <p className="value">{value}</p>
        </Card>
      ))}
    </ul>
  );
};
