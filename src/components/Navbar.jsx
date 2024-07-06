import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mb-3">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-yellow-800 transition-colors">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-yellow-800 transition-colors">
         About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-yellow-800 transition-colors">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-yellow-800 transition-colors">
          Docs
        </a>
      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 mb-2 ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 flex flex-row gap-2"
        >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAeFBMVEUTGigRGCcAABYAAAAAABAIEiIWHSoAABkdIy+oqq3///+2t7o6PkfS09Wmp6oxNT/y8vMAAArc3N4AABSEhYoAAAW9vsCio6YoLTnm5ueXmJtMUFhARU9DR08ADR9wdHpVWF96fIFlZ23FxshdYGaRk5YmKjUAABi5NGlnAAAA0ElEQVR4AczQRQLCQAxA0WQyqbu7oPe/IQSnW/TX+6oDfx4udxVJWg7Y4KuZForZjuSaCOw5iGcjP1Byu4HHQjeKEXSQEEhpFuUIohJTUSqswrqJ5fGh03YMt9iribsMnX4AoChrx+EBqyNOLo1OjuT6NJfqjlTa6bBKclqvaeMotS00yMtJyhxGQYyd2ZkG84zp+Vd8i0EQht6xCS6oi3JX7fY5wxnBnEy4Y5Oy/PsVgeER9yJ3hDehCee4XevrdXOgZMv3ceKLiarDGIYYAACHvQ/LUUYFbwAAAABJRU5ErkJggg==" alt="" />
          Luxury constructión
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
