import { FC } from "react";

interface IHeader {
  title: string;
}
const Header: FC<IHeader> = ({ title }): JSX.Element => {
  return (
    <header
      className="
                -translate-x-1/2
                backdrop-blur-md 
                bg-white/30
                border-[0.5px]
                border-gray-300
                fixed
                font-semibold
                grid
                h-16
                left-1/2
                place-content-center
                rounded-lg
                select-none
                shadow-md
                sm:w-4/5
                top-1
                w-11/12
                md:max-w-4xl
                md:mx-auto
                md:rounded-lg
                "
    >
      <h1
        className="
                  bg-clip-text 
                  font-carter
                  font-extrabold 
                  text-3xl
                  text-transparent 
                  bg-gradient-to-r
                  from-orange-500/80 
                  via-amber-500/80
                  to-red-500/80
                  md:text-4xl
                "
      >
        {title}
      </h1>
    </header>
  );
};

export { Header };
