import { useCallback } from 'react';
import axios from 'axios';

export const useChart = () => {
  const getData = useCallback(async () => {
    try {
      const result = await axios('/data');
      return result.data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }, []);

  return {
    getData,
  };
};
