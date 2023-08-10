import { FC } from "react";

interface IMain {
  children: JSX.Element | JSX.Element[];
}

const Main: FC<IMain> = ({ children }): JSX.Element => {
  return (
    <main 
        className="
                  bg-gradient-to-b
                  from-orange-100 
                  min-h-[94vh] 
                  pt-24 
                  to-red-50
                  via-amber-100
                  w-full
                  md:h-[96vh]
                  "
          >
      {children}
    </main>
  );
};

export { Main };
