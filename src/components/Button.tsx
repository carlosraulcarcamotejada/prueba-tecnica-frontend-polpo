import { FC } from "react";

interface IButton {
  disabled: boolean;
  label: string;
  onClick: () => void;
}

const Button: FC<IButton> = ({ disabled, label, onClick }): JSX.Element => {
  return (
    <button
      className="
                bg-orange-500 
                cursor-pointer
                font-semibold
                h-10 
                px-4 
                py-2 
                rounded-md
                select-none
                shadow-md
                transition
                w-44
              text-white
                active:scale-95 
                active:shadow-lg
              active:bg-orange-600 
                disabled:active:scale-100
                disabled:cursor-not-allowed
                disabled:shadow-none 
              disabled:bg-orange-500/70
              disabled:hover:bg-orange-500/70
                hover:shadow-lg
                hover:shadow-orange-300/50
              hover:bg-orange-600 

                "
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {label}
    </button>
  );
};

export { Button };
