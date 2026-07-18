import { ArrowLeft, ArrowRight, ExternalLink, FileText } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ImageLightbox } from "../components/ImageLightbox";
import { MarkdownReport } from "../components/MarkdownReport";
import { ReadingProgress } from "../components/ReadingProgress";
import { Separator } from "../components/ui/separator";
import { task1Steps } from "../data/task1";
import task2Data from "../data/task2.json";
import task3Full from "../data/task3-full.txt?raw";
import task5Markdown from "../data/task5.md?raw";
import task6Markdown from "../data/task6.md?raw";
import { tasks } from "../data/tasks";
import { asset } from "../lib";

type Task2Row = {
  id: number;
  source: string;
  author: string;
  publisher: string;
  method: string;
  citations: string;
  currency: string;
};

function SourceLink({ href }: { href: string }) {
  return <a className="source-link" href={asset(href)} target="_blank" rel="noreferrer"><FileText size={18} /> Mở bài nộp gốc <ExternalLink size={15} /></a>;
}

function ArticleIntro({ task }: { task: (typeof tasks)[number] }) {
  return (
    <header className="article-intro section-shell">
      <Link to="/" className="back-link"><ArrowLeft size={18} /> Về trang chủ</Link>
      <div className="article-index">Chapter {task.number} / 06</div>
      <p className="eyebrow">{task.englishTitle}</p>
      <h1>{task.title}</h1>
      <p className="article-summary">{task.summary}</p>
      <div className="article-actions">
        <SourceLink href={task.document} />
        <div className="tool-list">{task.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
      </div>
    </header>
  );
}

function Task1Content() {
  return (
    <section className="article-body section-shell">
      <div className="article-section-heading"><span>01</span><div><p className="eyebrow">Quy trình thực hành</p><h2>12 thao tác, trình bày đúng thứ tự minh chứng</h2></div></div>
      <div className="step-list">
        {task1Steps.map((step, index) => (
          <article className="practice-step" key={step.title}>
            <div className="step-copy"><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></div>
            <div className={`evidence-grid evidence-grid--${Math.min(step.images.length, 3)}`}>
              {step.images.map((image, imageIndex) => (
                <ImageLightbox
                  key={image}
                  src={asset(`/assets/tasks/task1/${image}`)}
                  alt={`Bài 1 - ${step.title}, minh chứng ${imageIndex + 1}`}
                  caption={`Minh chứng ${index + 1}.${imageIndex + 1}: ${step.title}`}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Task2Content() {
  const rows = task2Data.rows as Task2Row[];
  return (
    <section className="article-body section-shell">
      <div className="research-brief">
        <p className="eyebrow">Chủ đề nghiên cứu</p>
        <h2>Ứng dụng của AI trong việc học và dạy tiếng Anh</h2>
        <p>Bảng tổng hợp giữ nguyên 10 tài liệu trong bài nộp, đồng thời dựng lại bằng HTML để có thể đọc, cuộn ngang và tra cứu tốt hơn trên cả máy tính lẫn điện thoại.</p>
      </div>
      <div className="table-scroll research-table-wrap">
        <table className="research-table">
          <thead><tr><th>STT</th><th>Nguồn</th><th>Tác giả</th><th>Nhà xuất bản</th><th>Phương pháp nghiên cứu</th><th>Trích dẫn</th><th>Tính cập nhật</th></tr></thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="sticky-number">{String(row.id).padStart(2, "0")}</td>
                <td><strong>{row.source}</strong></td>
                <td>{row.author}</td>
                <td>{row.publisher}</td>
                <td>{row.method}</td>
                <td>{row.citations}</td>
                <td>{row.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="references-section">
        <p className="eyebrow">Harvard references</p>
        <h2>Tài liệu tham khảo</h2>
        <ol>{task2Data.references.map((reference) => <li key={reference}>{reference}</li>)}</ol>
      </section>
      <div className="evidence-grid evidence-grid--2 source-page-preview">
        <ImageLightbox src={asset("/assets/tasks/task2-page-1.png")} alt="Trang đầu bảng đánh giá nguồn học thuật" caption="Bản gốc - trang đầu bảng tổng hợp" />
        <ImageLightbox src={asset("/assets/tasks/task2-page-8.png")} alt="Trang danh mục tài liệu tham khảo" caption="Bản gốc - danh mục tài liệu tham khảo" />
      </div>
    </section>
  );
}

const promptCases = [
  {
    number: "01",
    title: "Tóm tắt tài liệu học thuật",
    tool: "Gemini AI",
    aim: "Tóm tắt bài Collective responsibility for climate change của Hormio (2023).",
    prompts: [
      "Read the academic article at https://doi.org/10.1002/wcc.830 and provide a concise summary.",
      "Read the academic article and provide a well-organized summary in formal academic English. Focus on the most important ideas and follow this structure: research topic, objectives, methodology, findings, conclusion and implications.",
      "You are a university student writing academic research about who should be responsible for climate change. Analyze the article, distinguish major and minor information, organize it logically, paraphrase completely and produce a coherent 500-600 word academic summary."
    ],
    comparison: [
      ["Prompt 1", "Khoảng 200 từ, nêu ý chính", "Cấu trúc đơn giản", "Phù hợp để đọc nhanh nhưng còn lược bỏ nhiều phần."],
      ["Prompt 2", "Chi tiết và đầy đủ hơn", "Đúng cấu trúc nghiên cứu", "Logic, dễ sử dụng cho literature review hoặc article summary."],
      ["Prompt 3", "Dài và sâu nhất", "Đoạn văn học thuật liền mạch", "Chất lượng tổng hợp và paraphrase tốt nhất; vẫn cần đối chiếu nguồn gốc."]
    ]
  },
  {
    number: "02",
    title: "Giải thích khái niệm phức tạp",
    tool: "Claude AI",
    aim: "Giải thích khái niệm hố đen cho sinh viên năm nhất chưa có nền tảng thiên văn học.",
    prompts: [
      "Hãy giải thích khái niệm hố đen vũ trụ: hố đen là gì, hình thành như thế nào và vì sao ánh sáng không thể thoát ra. Sử dụng ngôn ngữ đơn giản.",
      "Giải thích hố đen theo 6 mục: định nghĩa, hình thành, đặc điểm, ánh sáng, quan niệm sai lầm và ý nghĩa nghiên cứu khoa học.",
      "Bạn là giảng viên vật lý có kinh nghiệm. Hãy giải thích từ dễ đến khó, dùng ít nhất hai phép so sánh, không dùng công thức phức tạp, độ dài khoảng 700 từ và đảm bảo kiến thức khoa học hiện đại."
    ],
    comparison: [
      ["Prompt 1", "300-400 từ", "Ba ý chính", "Nhanh và đúng trọng tâm, phù hợp để hiểu cơ bản."],
      ["Prompt 2", "Đầy đủ nhất", "Sáu mục rõ ràng", "Bổ sung nhiều kiến thức mở rộng, phù hợp học chuyên sâu."],
      ["Prompt 3", "Mạch lạc và sư phạm", "Từ dễ đến khó", "Dùng so sánh trực quan, phù hợp người mới bắt đầu."]
    ]
  },
  {
    number: "03",
    title: "Tạo bộ câu hỏi ôn tập",
    tool: "Gemini AI",
    aim: "Tạo quiz từ đồng nghĩa đơn giản, dễ tiếp thu cho học sinh lớp 5.",
    prompts: [
      "Tạo quiz game về từ đồng nghĩa cho học sinh lớp 5.",
      "Tạo quiz 15 câu trắc nghiệm, mỗi câu có 4 đáp án và 1 đáp án đúng; dùng từ phù hợp chương trình Tiếng Việt lớp 5, độ khó tăng dần.",
      "Bạn là giáo viên tiểu học. Hãy chọn từ quen thuộc trong sách giáo khoa, dùng role prompting và ví dụ mẫu, sắp xếp từ dễ đến khó, hiển thị đáp án đúng sau từng câu và tạo đáp án nhiễu hợp lý."
    ],
    comparison: [
      ["Prompt 1", "Có đáp án và giải thích", "Chưa có lộ trình độ khó", "Một số từ vượt trình độ lớp 5."],
      ["Prompt 2", "15 câu, cấu trúc rõ", "Từ dễ đến khó", "Vẫn còn vài câu hoặc đáp án cần chỉnh sửa."],
      ["Prompt 3", "Hoàn chỉnh nhất", "Phù hợp trình độ", "Câu hỏi, đáp án và giải thích rõ ràng, có tính sư phạm."]
    ]
  }
];

function Task3Content() {
  return (
    <section className="article-body section-shell prompt-lab">
      {promptCases.map((item) => (
        <article className="prompt-case" key={item.number}>
          <header><span>{item.number}</span><div><p className="eyebrow">{item.tool}</p><h2>{item.title}</h2><p>{item.aim}</p></div></header>
          <div className="prompt-levels">
            {item.prompts.map((prompt, index) => (
              <section key={prompt}><div className="prompt-label"><span>0{index + 1}</span>{["Cơ bản", "Cải tiến", "Nâng cao"][index]}</div><pre>{prompt}</pre></section>
            ))}
          </div>
          <div className="table-scroll"><table className="comparison-table"><thead><tr><th>Phiên bản</th><th>Mức độ chi tiết</th><th>Cấu trúc</th><th>Đánh giá chung</th></tr></thead><tbody>{item.comparison.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
        </article>
      ))}
      <section className="prompt-evidence">
        <p className="eyebrow">Minh chứng kỹ thuật prompt</p>
        <h2>Cấu trúc đầu ra, role prompting, chain-of-thought ẩn và few-shot</h2>
        <div className="evidence-grid evidence-grid--2">
          {["img-000.png", "img-001.png", "img-002.png", "img-003.png"].map((image, index) => <ImageLightbox key={image} src={asset(`/assets/tasks/task3/${image}`)} alt={`Minh chứng prompt engineering ${index + 1}`} />)}
        </div>
      </section>
      <details className="full-report-details"><summary>Đọc toàn văn nội dung trích xuất từ báo cáo</summary><pre>{task3Full}</pre></details>
    </section>
  );
}

function Task4Content() {
  const tools = [
    { number: "01", title: "Google Drive", subtitle: "Lưu trữ và chia sẻ tệp", text: "File Reading Package của môn College Writing được cập nhật theo từng yêu cầu: reading notes, source evaluation, selected information. Không gian Drive có thiết lập quyền chia sẻ và chỉnh sửa cho những thành viên nhất định.", images: ["img-000.png", "img-001.png"] },
    { number: "02", title: "Google Docs", subtitle: "Soạn thảo tài liệu cộng tác", text: "Trong tài liệu Selected Information, từng nhận xét của các thành viên được hiển thị rõ. Nội dung được phân theo các thẻ Matrix, Paraphrase, Quotation và có lịch sử chỉnh sửa trong file nhóm.", images: ["img-002.png", "img-003.png"] },
    { number: "03", title: "Zalo", subtitle: "Giao tiếp nhóm", text: "Nhóm sử dụng Zalo để chia việc, gửi các bài báo PDF liên quan, chia sẻ đường dẫn và trao đổi phản hồi trong suốt quá trình hoàn thiện bài.", images: ["img-004.png", "img-005.png"] }
  ];
  return (
    <section className="article-body section-shell collaboration-flow">
      <div className="workflow-line" aria-label="Quy trình cộng tác"><span>Google Drive</span><i>→</i><span>Google Docs</span><i>→</i><span>Zalo</span></div>
      {tools.map((tool) => (
        <article className="collab-tool" key={tool.title}>
          <header><span>{tool.number}</span><div><p className="eyebrow">{tool.subtitle}</p><h2>{tool.title}</h2><p>{tool.text}</p></div></header>
          <div className="evidence-grid evidence-grid--2">{tool.images.map((image, index) => <ImageLightbox key={image} src={asset(`/assets/tasks/task4/${image}`)} alt={`${tool.title} - minh chứng ${index + 1}`} caption={`${tool.title}: ${tool.subtitle}`} />)}</div>
        </article>
      ))}
    </section>
  );
}

function ReportContent({ id }: { id: string }) {
  if (id === "1") return <Task1Content />;
  if (id === "2") return <Task2Content />;
  if (id === "3") return <Task3Content />;
  if (id === "4") return <Task4Content />;
  if (id === "5") return <section className="article-body section-shell"><MarkdownReport content={task5Markdown} /></section>;
  return <section className="article-body section-shell"><MarkdownReport content={task6Markdown} /></section>;
}

export function WorkPage() {
  const { id = "" } = useParams();
  const index = tasks.findIndex((task) => task.id === id);
  if (index < 0) return <Navigate to="/" replace />;
  const task = tasks[index];
  const previous = index > 0 ? tasks[index - 1] : null;
  const next = index < tasks.length - 1 ? tasks[index + 1] : null;
  return (
    <div className="work-page">
      <ReadingProgress />
      <ArticleIntro task={task} />
      <Separator />
      <ReportContent id={id} />
      <nav className="chapter-nav section-shell" aria-label="Chuyển bài tập">
        {previous ? <Link to={`/work/${previous.id}`}><ArrowLeft size={18} /><span><small>Bài trước</small>{previous.number} · {previous.englishTitle}</span></Link> : <span />}
        {next ? <Link to={`/work/${next.id}`}><span><small>Bài tiếp theo</small>{next.number} · {next.englishTitle}</span><ArrowRight size={18} /></Link> : <Link to="/"><span><small>Hoàn thành</small>Về trang chủ</span><ArrowRight size={18} /></Link>}
      </nav>
    </div>
  );
}
