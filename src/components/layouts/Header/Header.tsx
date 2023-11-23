import { Ad } from "../../../types/Ad";
import Logo from "./Logo";
import SearchBar from "./SearchBar/index";

interface ISidebarUIComponentProps {
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
}
const Header = ({ setAds }: ISidebarUIComponentProps) => {
  return (
    <>
      <Logo />
      <SearchBar setAds={setAds} />
    </>
  );
};

export default Header;
