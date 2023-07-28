import { FC, useEffect, useState } from "react";
import { getJoke } from "./helpers/getJoke";
import { IResFact } from "./types";
import { getCategoriesRes } from "./helpers/getCategories";
import { Listbox } from "./components";

const App: FC = (): JSX.Element => {
  const [fact, setFact] = useState<IResFact>();
  const [selectedCategory, setselectedCategory] = useState<string>("");
  const [categories, setcategories] = useState<string[]>([]);

  const getNewFact = async () => {
    const newFact = await getJoke(selectedCategory);
    setFact(newFact);
  };

  const getCategories = async () => {
    const categories = await getCategoriesRes();
    setcategories(categories);
  };

  //UseEffect to load the first joke and the categories
  useEffect(() => {

    getCategories();
  }, []);

  return (
    <main className="h-screen bg-gray-50 w-full">
      <header className="text-3xl text-white w-full text-center py-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 shadow-md">
        <div>Chuck Norris Jokes</div>
      </header>

      <div className="p-12 flex flex-col justify-center items-center gap-y-16">
        <Listbox
          categories={categories}
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />

        <button
          type="button"
          className="py-2 active:scale-95 transition active:bg-indigo-600 hover:shadow-md active:shadow-md hover:bg-indigo-600 px-4 rounded-md bg-indigo-500 text-white font-semibold"
          onClick={getNewFact}
        >
          New joke
        </button>

        {fact?.value && (
          <p className="w-full border bg-white border-gray-200 shadow-md h-auto p-2 rounded-lg text-lg text-green-600 ">
            {fact?.value}
          </p>
        )}
      </div>
    </main>
  );
};

export default App;
