import { FC } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <footer
      className="
                border-t
                border-t-neutral-200
                flex
                h-[6vh]
                items-center 
                justify-start
                px-4 
                text-sm
                w-full 
                md:h-[4vh]
                bg-gray-200 
                dark:bg-neutral-900
              dark:border-t-neutral-700
                "
    >
      <p className="text-gray-500 dark:text-gray-500 w-full flex justify-start gap-x-4 items-center">
        &#169; {new Date().getFullYear()}  &#x2022; Chuck Norris App for POLPO
        <img width={20} height={20} src="/polpo_icon.png" alt="" />
      </p>
    </footer>
  );
};

export { Footer };
