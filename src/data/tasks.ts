export type TaskMeta = {
  id: string;
  number: string;
  title: string;
  englishTitle: string;
  summary: string;
  tools: string[];
  preview: string;
  document: string;
  accent: "burgundy" | "navy" | "sage";
};

export const tasks: TaskMeta[] = [
  {
    id: "1",
    number: "01",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    englishTitle: "File & Folder Practice",
    summary: "Thực hành 12 thao tác trên Windows: tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp tin.",
    tools: ["Windows", "File Explorer", "Recycle Bin"],
    preview: "/assets/tasks/task1-preview.png",
    document: "/documents/bai-1-thao-tac-tep-thu-muc.pdf",
    accent: "burgundy"
  },
  {
    id: "2",
    number: "02",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    englishTitle: "Academic Information Evaluation",
    summary: "Tổng hợp 10 nguồn về AI trong học và dạy tiếng Anh, đánh giá tác giả, nhà xuất bản, phương pháp, trích dẫn và tính cập nhật.",
    tools: ["Google Scholar", "Harvard", "Research"],
    preview: "/assets/tasks/task2-page-1.png",
    document: "/documents/bai-2-thong-tin-hoc-thuat.pdf",
    accent: "navy"
  },
  {
    id: "3",
    number: "03",
    title: "Viết prompt hiệu quả cho các tác vụ học tập",
    englishTitle: "Prompt Engineering",
    summary: "Thử nghiệm ba cấp độ prompt cho tóm tắt tài liệu, giải thích khái niệm phức tạp và tạo quiz học tập.",
    tools: ["Gemini", "Claude", "Prompt engineering"],
    preview: "/assets/tasks/task3-preview.png",
    document: "/documents/bai-3-prompt-hieu-qua.pdf",
    accent: "burgundy"
  },
  {
    id: "4",
    number: "04",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    englishTitle: "Online Collaboration",
    summary: "Minh chứng cách lưu trữ, cộng tác tài liệu và trao đổi nhóm bằng Google Drive, Google Docs và Zalo.",
    tools: ["Google Drive", "Google Docs", "Zalo"],
    preview: "/assets/tasks/task4-preview.png",
    document: "/documents/bai-4-hop-tac-truc-tuyen.pdf",
    accent: "navy"
  },
  {
    id: "5",
    number: "05",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    englishTitle: "Generative Content",
    summary: "Thiết kế infographic “5 bước viết email học thuật bằng tiếng Anh” bằng ChatGPT, AI tạo ảnh và Canva AI.",
    tools: ["ChatGPT", "AI image", "Canva AI"],
    preview: "/assets/tasks/task5/image3.png",
    document: "/documents/bai-5-ai-tao-sinh.docx",
    accent: "sage"
  },
  {
    id: "6",
    number: "06",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    englishTitle: "Responsible AI",
    summary: "Xây dựng quy trình sử dụng AI minh bạch, phân tích ranh giới đạo đức và đề xuất 7 nguyên tắc cá nhân.",
    tools: ["ChatGPT", "Academic integrity", "Infographic"],
    preview: "/assets/tasks/task6/image5.png",
    document: "/documents/bai-6-ai-co-trach-nhiem.docx",
    accent: "sage"
  }
];
