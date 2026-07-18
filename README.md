# Portfolio NMCNS — Phạm Quỳnh Mai

Portfolio học phần **Nhập môn Công nghệ số** của **Phạm Quỳnh Mai — MSSV 25040858**, được xây dựng bằng React, TypeScript và Vite.

## Chạy trên máy

Yêu cầu Node.js 22 trở lên.

```bash
npm install
npm run dev
```

Bản production:

```bash
npm run build
npm run preview
```

## Deploy GitHub Pages

Repository đề xuất: `25040858-pham-quynh-mai-portfolio`

1. Tạo repository trên GitHub với tên trên.
2. Đẩy toàn bộ source vào nhánh `main`.
3. Vào **Settings → Pages**.
4. Trong **Build and deployment → Source**, chọn **GitHub Actions**.
5. Workflow `.github/workflows/deploy.yml` sẽ tự build và deploy sau mỗi lần push vào `main`.

Website dùng `HashRouter` và Vite `base: "./"`, nên các trang bài tập hoạt động an toàn trên đường dẫn repository của GitHub Pages.

## Cấu trúc nội dung

- Trang chủ: giới thiệu, thông tin cá nhân, 6 bài tập, sở thích nhảy và tổng kết.
- `/work/1` đến `/work/6`: nội dung chi tiết từng bài.
- `public/documents`: tài liệu bài nộp gốc.
- `public/assets`: ảnh minh chứng và decor nền trong suốt.

## Lưu ý thiết kế

- Font hệ thống có hỗ trợ đầy đủ tiếng Việt; không phụ thuộc file font ngoài.
- Decor nằm ở lớp nền và được giảm/ẩn trên màn hình nhỏ để không che chữ hoặc ảnh minh chứng.
- Có hỗ trợ `prefers-reduced-motion`.

## GitHub Actions

Workflow dùng Node.js 20 và npm registry công khai. Nếu lần chạy cũ đang lỗi ở bước `npm ci`, hãy push phiên bản source mới này rồi chạy lại workflow trong tab **Actions**.


## Phiên bản V4
- Đã thêm ảnh chân dung ở hero và About.
- Đã thêm ảnh nhảy ở phần Dance và ảnh tập thể ở Final Reflection.
- Toàn bộ typography dùng font hệ thống an toàn cho tiếng Việt, không dùng font ngoài hoặc kiểu italic tổng hợp.
- Đã tách vùng nội dung và vùng ảnh/decor để tránh chồng lớp.
