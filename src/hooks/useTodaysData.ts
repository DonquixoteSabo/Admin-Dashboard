import { useCallback } from 'react';
import axios from 'axios';

export const useTodaysData = () => {
  const getData = useCallback(async () => {
    try {
      const result = await axios('/todaysData');
      return result.data.todaysData;
    } catch (error) {
      console.log(error);
      return [];
    }
  }, []);

  return {
    getData,
  };
};
