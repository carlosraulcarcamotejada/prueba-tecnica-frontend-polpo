import { FC, useState } from "react";
import { Listbox } from "./components";
import { useFetchJokes } from "./hooks/useFetchJokes";

const App: FC = (): JSX.Element => {
  const [selectedCategory, setselectedCategory] = useState<string>("");

  const { joke, getNewJoke } = useFetchJokes(selectedCategory);

  return (
    <main className="h-screen bg-gray-50 w-full">
      <header className="text-3xl text-white w-full text-center py-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 shadow-md">
        <div>Chuck Norris Jokes</div>
      </header>

      <div className="p-12 flex flex-col justify-center items-center gap-y-16">
        <Listbox
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />

        <button
          disabled={selectedCategory.length === 0}
          type="button"
          className="py-2 disabled:opacity-70 disabled:shadow-none disabled:active:scale-100 disabled:hover:bg-indigo-500  active:scale-95 transition active:bg-indigo-600 hover:shadow-md active:shadow-md hover:bg-indigo-600 px-4 rounded-md bg-indigo-500 text-white font-semibold"
          onClick={getNewJoke}
        >
          New random joke
        </button>

        {joke?.value && (
          <p className="w-full border bg-white border-gray-200 shadow-md h-auto p-2 rounded-lg text-lg text-green-600 ">
            {joke?.value}
          </p>
        )}
      </div>
    </main>
  );
};

export default App;
