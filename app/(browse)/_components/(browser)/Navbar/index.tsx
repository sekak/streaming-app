import Actions from "./Actions";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-20 bg-primary-foreground z-50 flex items-center justify-between px-2 lg:px-4">
      <Logo />
      <SearchBar />
      <Actions />
    </div>
  );
};

export default Navbar;
