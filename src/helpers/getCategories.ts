//Función para recupera las categorías
export const getCategoriesRes = async (): Promise<string[]> => {
  try {
    const url = `https://api.chucknorris.io/jokes/categories`;
    const resp = await fetch(url);
    const data: string[] = await resp.json();
    return data;
  } catch (error) {
    return [];
  }
};
