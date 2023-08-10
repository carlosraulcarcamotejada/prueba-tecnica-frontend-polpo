import { useState, useEffect } from "react";
import { getJoke } from "../helpers/getJoke";
import { IResJoke } from "../types";

export const useFetchJokes = (selectedCategory: string) => {
  const [joke, setJoke] = useState<IResJoke>({} as IResJoke);
  const [isLoading, setIsLoading] = useState(true);

  const getNewJoke = async () => {
    setIsLoading(true);
    const newJoke = await getJoke(selectedCategory);
    setJoke(newJoke);
    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedCategory.length > 0) {
      getNewJoke();
    }
  }, [selectedCategory]);

  return {
    joke,
    getNewJoke,
    isLoading,
  };
};
