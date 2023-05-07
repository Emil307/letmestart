import { useState, useEffect } from 'react';
import { IWordsList } from '../types/types'; 
import axios, { AxiosError } from 'axios';

export function useThemesList() {
  const [themes, setThemes] = useState<IWordsList[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const user = localStorage.getItem(JSON.parse('user')!);

  const API = 'http://localhost:8000/api/v1/word-categories/' + (user as any).id;

  async function getThemes() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IWordsList[]>(`${API}`);
      setThemes(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getThemes();
  }, [])

  return { themes, loading, error }
}