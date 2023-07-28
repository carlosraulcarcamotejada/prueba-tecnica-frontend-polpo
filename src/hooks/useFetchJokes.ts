import { useState, useEffect } from "react";
import { getJoke } from "../helpers/getJoke";
import { IResFact } from "../types";

export const useFetchJokes = (selectedCategory: string) => {
  const [joke, setJoke] = useState<IResFact>();

  const getNewJoke = async () => {
    const newJoke = await getJoke(selectedCategory);
    setJoke(newJoke);
  };

  useEffect(() => {
    if (selectedCategory.length > 0) {
      getNewJoke();
    }
  }, [selectedCategory]);

  return {
    joke,
    getNewJoke,
  };
};
