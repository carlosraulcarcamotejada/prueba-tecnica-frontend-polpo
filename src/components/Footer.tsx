import { FC } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <footer
      className="
              bg-gray-100 
                border-t
              border-t-neutral-300
                flex
                gap-x-2
                h-[6vh]
                items-center 
                justify-start
                px-4
                select-none 
                text-sm
                w-full 
                md:h-[4vh]
                "
    >
      <p className="text-gray-500">
        &#169; {new Date().getFullYear()} &#x2022; Chuck Norris App for POLPO
      </p>
      <img width={20} height={20} src="/polpo_icon.png" alt="polpo logo" />
    </footer>
  );
};

export { Footer };
