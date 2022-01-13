import { Fragment, FC } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "./PopoverExample.css";

type Navigation = {
  id: number;
  name: string;
  href: string;
  activeTextBlack: string;
};

type Props = {
  navigation: Navigation[];
};

type Open = {
  open: boolean;
};

const PopoverExample: FC<Props> = ({ navigation }) => {
  const buttonHandler = ({ open }: Open) => (
    <>
      {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
    </>
  );

  const mapNavigation = navigation.map((item) => {
    return (
      <li key={item.id} className="first:mt-0 mt-2 sm:mt-0">
        <Link to={item.href} className={item.activeTextBlack}>
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <Popover>
      <div className="hamburger sm:hidden w-7 h-7 flex flex-col justify-center items-center cursor-pointer">
        <Popover>
          <Transition
            show={true}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Button className="p-1 mt-1 rounded-md bg-gray-200">
              {buttonHandler}
            </Popover.Button>
          </Transition>
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel className="absolute left-1/2 -translate-x-1/2 z-10 w-11/12 mt-3 ring-1 ring-black ring-opacity-5 rounded-lg">
              <div className="rounded-lg shadow-md bg-white">
                <div>
                  <ul className="px-4 pt-4 pb-5 text-gray-500">
                    {mapNavigation}
                  </ul>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </Popover>
  );
};

export default PopoverExample;
