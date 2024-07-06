import { Typography } from "@material-tailwind/react";
 
export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAeFBMVEUTGigRGCcAABYAAAAAABAIEiIWHSoAABkdIy+oqq3///+2t7o6PkfS09Wmp6oxNT/y8vMAAArc3N4AABSEhYoAAAW9vsCio6YoLTnm5ueXmJtMUFhARU9DR08ADR9wdHpVWF96fIFlZ23FxshdYGaRk5YmKjUAABi5NGlnAAAA0ElEQVR4AczQRQLCQAxA0WQyqbu7oPe/IQSnW/TX+6oDfx4udxVJWg7Y4KuZForZjuSaCOw5iGcjP1Byu4HHQjeKEXSQEEhpFuUIohJTUSqswrqJ5fGh03YMt9iribsMnX4AoChrx+EBqyNOLo1OjuT6NJfqjlTa6bBKclqvaeMotS00yMtJyhxGQYyd2ZkG84zp+Vd8i0EQht6xCS6oi3JX7fY5wxnBnEy4Y5Oy/PsVgeER9yJ3hDehCee4XevrdXOgZMv3ceKLiarDGIYYAACHvQ/LUUYFbwAAAABJRU5ErkJggg==" alt="logo-ct" className="w-10" />
       
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Carlos demo (Luxury)
      </Typography>
    </footer>
  );
}
