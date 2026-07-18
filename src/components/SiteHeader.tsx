import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const sections = [
  { label: "Giới thiệu", id: "about" },
  { label: "Bài tập", id: "coursework" },
  { label: "Tổng kết", id: "summary" }
];

export function SiteHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const goSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Về trang chủ">
          <span>PHẠM QUỲNH MAI</span>
          <small>Portfolio · 25040858</small>
        </Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {sections.map((item) => (
            <button type="button" key={item.id} onClick={() => goSection(item.id)}>{item.label}</button>
          ))}
          <a href="mailto:maiphamm07@gmail.com">Liên hệ</a>
        </nav>
        <DialogPrimitive.Root>
          <DialogPrimitive.Trigger asChild>
            <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label="Mở menu"><Menu /></Button>
          </DialogPrimitive.Trigger>
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="dialog-overlay" />
            <DialogPrimitive.Content className="mobile-sheet">
              <DialogPrimitive.Title className="sr-only">Menu</DialogPrimitive.Title>
              <DialogPrimitive.Close className="dialog-close" aria-label="Đóng"><X size={20} /></DialogPrimitive.Close>
              <p className="eyebrow">Điều hướng</p>
              <div className="mobile-nav-list">
                {sections.map((item, index) => (
                  <DialogPrimitive.Close asChild key={item.id}>
                    <button onClick={() => goSection(item.id)}><span>0{index + 1}</span>{item.label}</button>
                  </DialogPrimitive.Close>
                ))}
                <a href="mailto:maiphamm07@gmail.com"><span>04</span>Liên hệ</a>
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      </div>
    </header>
  );
}
