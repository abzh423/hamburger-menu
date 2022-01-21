### Hamburger Menu Repo

That repo is supposed to be a place to accumulate all my knowledge
and new discoveries about ways in wich to create mobile menus.

### How to center a container with bg and display as absolute

I have used tailwind for that, and the following what implements it:
`absolute left-1/2 -translate-x-1/2`

### Headless UI

For PopoverExample.tsx I have used `<Transition />` component that makes appearance
of popover.panel smooth.

To use `<Transition />`, just wrap around whatever you need.

Basically the structure is simple, you have to wrap `<Popover.Button />`
and `<Popover.Panel />` in `<Popover />`. Otherwise it won't work.

And finally, `<Popover.Button />` opens `<Popover.Panel />`.

### How to close Popover.Panel

The easisest solution is just to reference the button and click it.
```
const buttonRef = useRef<any>();
onClick={() => {
  buttonRef.current.click();
}
```
