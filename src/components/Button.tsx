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
                bg-indigo-600 
                font-semibold
                h-10 
                px-4 
                py-2 
                rounded-md
                text-white 
                w-44
                transition
              active:bg-indigo-600 
                active:scale-95 
                active:shadow-md
                disabled:active:scale-100
                disabled:opacity-70 
                disabled:shadow-none 
              disabled:hover:bg-indigo-500  
                hover:shadow-md 
              hover:bg-indigo-700 
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
