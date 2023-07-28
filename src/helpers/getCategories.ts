

//Function to fetch a joke
export const getCategoriesRes = async (): Promise<string[]> => {
  const url = `https://api.chucknorris.io/jokes/categories`;
  const resp = await fetch(url);
  const data: string[] = await resp.json();
  return data;
};
