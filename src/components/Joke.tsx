import { FC } from "react";
import { Spinner } from ".";

interface IJokes {
  joke: string;
  isLoading: boolean;
}

const Joke: FC<IJokes> = ({ joke, isLoading }): JSX.Element => {
  return (
    <div
      className={`
                  border      
                  p-2
                  h-40
                  
                  rounded-lg 
                  shadow-inner
                  w-full
                bg-white 
                border-gray-200 

                  md:max-w-4xl
                  ${isLoading && joke.length ? "grid" : ""}
                  ${isLoading && joke.length ? "place-content-center" : ""}
                  `}
    >
      {isLoading && joke.length > 0 ? (
        <Spinner size={50} />
      ) : (
        <p
          className="
                    font-carter
                    text-amber-950
                    text-lg 
                    "
        >
          {joke}
        </p>
      )}
    </div>
  );
};

export { Joke };
