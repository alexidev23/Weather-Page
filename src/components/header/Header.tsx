import { ModeToggle } from "../mode-toggle";
import { Input } from "../ui/input";

function Header() {
  return (
    <header className="flex px-28 py-6 justify-end gap-4">
      <Input type="search" placeholder="buscar..." className="w-[20rem]"/>
      <ModeToggle />
    </header>
  );
}

export default Header;