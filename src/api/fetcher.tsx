import { RegisterFormValues } from '../pages/Register';

export const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const postFetcher = async (
  url: string,
  { arg }: { arg: RegisterFormValues },
) => {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg), // 서버한테 전달
  });
  return res;
};
