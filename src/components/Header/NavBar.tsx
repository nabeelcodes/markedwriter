import { memo } from "react";
import { NavMenuMobile } from "./NavMenuMobile";
import { NavMenuDesktop } from "./NavMenuDesktop";

export const NavBar = memo(() => {
  return (
    <>
      <NavMenuMobile />

      <NavMenuDesktop />
    </>
  );
});
