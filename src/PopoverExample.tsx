import { Popover } from "@headlessui/react";

function PopoverExample() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button>
            <div className="hamburger w-4 h-4">
              <span className="w-4 h-2 bg-black"></span>
              <span className="w-4 h-2 bg-black"></span>
            </div>
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
