import { useState, useEffect } from 'react';
import axios from 'axios';

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

export const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('/cards');
      const { cards } = response.data;
      setCards(cards);
    };
    fetch();
  }, []);

  return (
    <ul className="cards">
      {cards.length > 0 ? (
        cards.map(({ title, value }) => (
          <Card key={title}>
            <p className="title">{title}</p>
            <p className="value">{value}</p>
          </Card>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </ul>
  );
};
