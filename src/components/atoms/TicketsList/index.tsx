import { useState, useEffect } from 'react';
import axios from 'axios';

//styles
import { List } from './styles';

export const TicketsList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('/tickets');
      const { tickets } = response.data;
      setTickets(tickets);
    };
    fetch();
  }, []);

  return (
    <List>
      {tickets.length > 0 ? (
        tickets.map(({ text, value }) => (
          <li key={text}>
            <p>{text}</p>
            <small>{value}</small>
          </li>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </List>
  );
};
