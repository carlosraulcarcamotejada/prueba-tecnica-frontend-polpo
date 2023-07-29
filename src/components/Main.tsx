import { FC } from "react";

interface IMain {
  children: JSX.Element | JSX.Element[];
}

const Main: FC<IMain> = ({ children }): JSX.Element => {
  return (
    <main className="min-h-[94vh] md:h-[96vh] bg-gray-100 dark:bg-black  w-full">
      {children}
    </main>
  );
};

export { Main };
