import { IResFact } from "../types";

//Function to fetch a joke
export const getJoke = async (category: string): Promise<IResFact> => {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const resp = await fetch(url);
  const data: IResFact = await resp.json();
  return data;
};
