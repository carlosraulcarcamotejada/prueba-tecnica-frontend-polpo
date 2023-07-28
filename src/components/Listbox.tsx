import { FC, Fragment, useState, useEffect } from "react";
import { Listbox as ListboxHUI, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { getCategoriesRes } from "../helpers/getCategories";

interface IListbox {
  selectedCategory: string;
  setselectedCategory: (selectedCategory: string) => void;
}

const Listbox: FC<IListbox> = ({
  selectedCategory,
  setselectedCategory,
}): JSX.Element => {
  const [categories, setCategories] = useState<string[]>([]);

  const getCategories = async () => {
    const categories = await getCategoriesRes();
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="top-16 w-72">
      <h3 className="text-center font-bold">Select a category</h3>
      <ListboxHUI value={selectedCategory} onChange={setselectedCategory}>
        <div className="relative mt-1">
          <ListboxHUI.Button className="relative w-full cursor-default h-10 rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedCategory}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxHUI.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxHUI.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {categories.map((category) => (
                <ListboxHUI.Option
                  key={category}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={category}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {category}
                      </span>
                      {selectedCategory === category ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxHUI.Option>
              ))}
            </ListboxHUI.Options>
          </Transition>
        </div>
      </ListboxHUI>
    </div>
  );
};

export { Listbox };
