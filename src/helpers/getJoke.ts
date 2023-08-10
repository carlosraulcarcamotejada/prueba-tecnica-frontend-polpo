import { IResJoke } from "../types";

//Función para recupera una ramdon joke
export const getJoke = async (category: string): Promise<IResJoke> => {
  try {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const resp = await fetch(url);
    const data: IResJoke = await resp.json();
    return data;
  } catch (error) {
    return {} as IResJoke;
  }
};
