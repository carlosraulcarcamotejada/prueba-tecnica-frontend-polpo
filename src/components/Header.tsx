import { FC } from "react";

interface IHeader {
  title: string;
}
const Header: FC<IHeader> = ({ title }): JSX.Element => {
  return (
    <header
      className="
                py-4
                shadow-md
                text-3xl 
                text-center
                text-gray-100 
                w-full
                font-carter
                bg-gradient-to-r
                from-pink-400
                via-purple-400
                to-violet-400 
                md:max-w-4xl
                md:mx-auto
                md:rounded-lg
                "
    >
      <div>{title}</div>
    </header>
  );
};

export { Header };
