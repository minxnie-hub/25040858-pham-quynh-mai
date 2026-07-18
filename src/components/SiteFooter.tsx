import { Mail, MapPin, UserRound } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-script">Keep moving, keep becoming.</div>
      <div className="footer-meta">
        <a href="mailto:maiphamm07@gmail.com"><Mail size={17} /> maiphamm07@gmail.com</a>
        <span><MapPin size={17} /> ULIS - VNU</span>
        <span><UserRound size={17} /> MSSV 25040858</span>
      </div>
      <small>© 2026 Phạm Quỳnh Mai · Portfolio Nhập môn Công nghệ số</small>
    </footer>
  );
}
