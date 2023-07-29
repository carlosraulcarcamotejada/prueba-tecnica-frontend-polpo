import { IResFact } from "../types";

//Función para recupera una ramdon joke
export const getJoke = async (category: string): Promise<IResFact> => {
  try {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const resp = await fetch(url);
    const data: IResFact = await resp.json();
    return data;
  } catch (error) {
    return {} as IResFact;
  }
};
