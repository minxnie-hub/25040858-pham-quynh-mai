import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function Layout() {
  return (
    <>
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
    </>
  );
}
