import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import "./PopoverExample.css";

function PopoverExample() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button>
            <MenuIcon className="h-6 w-6" />
          </Popover.Button>
          <Popover.Panel>
            <h1>Hello World</h1>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

export default PopoverExample;
