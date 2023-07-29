import { FC } from "react";

interface IJokes {
  joke: string | undefined;
}

const Jokes: FC<IJokes> = ({ joke }): JSX.Element => {
  return (
    <>
      {joke ? (
        <p
          className="
                  bg-white 
                    border 
                  border-gray-200 
                    h-auto 
                    p-2 
                    rounded-lg 
                    shadow-md
                    text-lime-500
                    font-semibold
                    text-lg 
                    w-full 
                    md:max-w-4xl
                    dark:bg-neutral-900
                    dark:border-t-neutral-700
                    dark:border-x-transparent
                    dark:border-b-transparent
                    "
        >
          {joke}
        </p>
      ):(<></>)}
    </>
  );
};

export { Jokes };
