import { RegisterFormValues } from '../pages/Register';
import { LoginFormValues } from '../pages/Login';

export const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const postFetcher = async (url: string, { arg }: { arg: any }) => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg.arg), // 서버한테 전달
  });
  return res;
};
