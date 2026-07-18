import { ArrowDownRight, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Decor } from "../components/Decor";
import { Separator } from "../components/ui/separator";
import { asset } from "../lib";
import { tasks } from "../data/tasks";

const reveal = {
  initial: { opacity: 1, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }
};

export function Home() {
  return (
    <div className="home-page">
      <section className="hero section-shell">
        <Decor name="ribbon" className="hero-ribbon" />
        <Decor name="constellation" className="hero-constellation" />
        <div className="hero-index" aria-hidden="true">
          <span>01 / 06</span>
          <span>PORTFOLIO</span>
        </div>

        <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <p className="eyebrow">English Language Student · ULIS</p>
          <h1>Fresh Chapter,<br /><em>Moving Forward.</em></h1>
          <div className="hero-quote">
            <Decor name="quote" />
            <blockquote>
              “Tomorrow is always fresh,<br />with no mistakes in it yet.”
              <cite>— Anne Shirley, Anne with an E</cite>
            </blockquote>
          </div>
        </motion.div>

        <motion.aside className="hero-card" initial={{ opacity: 0, rotate: 1.5, y: 18 }} animate={{ opacity: 1, rotate: -1.2, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <Decor name="tape" className="hero-tape" />
          <div className="hero-card-inner">
            <span className="hero-card-kicker">A personal learning journal</span>
            <div className="hero-monogram" aria-hidden="true">QM</div>
            <div className="hero-card-content">
              <h2>PHẠM QUỲNH MAI</h2>
              <p>Ngôn ngữ Anh · Trường Đại học Ngoại ngữ – ĐHQGHN</p>
              <dl>
                <div><dt>MSSV</dt><dd>25040858</dd></div>
                <div><dt>MBTI</dt><dd>INFJ</dd></div>
                <div><dt>Cung</dt><dd>Nhân Mã</dd></div>
              </dl>
            </div>
          </div>
        </motion.aside>

        <a href="#about" className="scroll-cue"><span>Khám phá</span><ArrowDownRight size={22} /></a>
      </section>

      <section id="about" className="about section-shell section-divider">
        <Decor name="botanical" className="about-botanical" />
        <motion.div className="section-heading" {...reveal}>
          <p className="eyebrow">About me</p>
          <h2>Ngôn ngữ, giáo dục<br />và những chuyển động mới.</h2>
        </motion.div>
        <motion.div className="about-grid" {...reveal}>
          <div className="about-copy prose-lead">
            <p>Mình là sinh viên ngành Ngôn ngữ Anh tại Trường Đại học Ngoại ngữ - ĐHQGHN. Mình yêu thích lĩnh vực ngôn ngữ, giáo dục và sáng tạo.</p>
            <p>Mình luôn mong muốn học hỏi những điều mới, phát triển bản thân thông qua các dự án học tập, hoạt động nhóm và trải nghiệm thực tế. Với tinh thần trách nhiệm, sự cầu tiến và khả năng thích nghi, mỗi trải nghiệm đều là một cơ hội để trưởng thành và tạo ra những giá trị tích cực.</p>
            <p>Portfolio này lưu giữ các sản phẩm, dự án và thành quả trong quá trình học tập, đồng thời ghi lại hành trình phát triển của bản thân.</p>
          </div>
          <div className="identity-notes">
            <article><span>01</span><h3>INFJ</h3><p>Trực giác, thấu cảm và luôn tìm ý nghĩa trong những điều mình theo đuổi.</p></article>
            <article><span>02</span><h3>Nhân Mã</h3><p>Tinh thần khám phá, thích học hỏi và chủ động bước ra khỏi vùng quen thuộc.</p></article>
            <article><span>03</span><h3>Dance</h3><p>Nhảy là cách mình thể hiện cảm xúc, giải tỏa áp lực và rèn luyện sự tự tin, kỷ luật.</p></article>
          </div>
        </motion.div>
      </section>

      <section id="coursework" className="coursework section-shell section-divider">
        <div className="coursework-intro">
          <motion.div className="section-heading" {...reveal}>
            <p className="eyebrow">Selected coursework</p>
            <h2>Sáu chương của<br />một hành trình số.</h2>
          </motion.div>
          <motion.p className="coursework-note" {...reveal}>Mỗi bài được trình bày theo đúng thứ tự nội dung, bảng biểu và minh chứng gốc. Ảnh có thể phóng lớn để đọc chi tiết.</motion.p>
        </div>

        <div className="project-index">
          {tasks.map((task, index) => (
            <motion.article className={`project-row project-row--${index % 2 === 0 ? "left" : "right"}`} key={task.id} {...reveal}>
              <div className="project-number">{task.number}</div>
              <div className="project-copy">
                <p className="project-english">{task.englishTitle}</p>
                <h3>{task.title}</h3>
                <p>{task.summary}</p>
                <div className="tool-list">{task.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                <Link to={`/work/${task.id}`} className="text-link">Xem bài tập <ArrowRight size={18} /></Link>
              </div>
              <Link to={`/work/${task.id}`} className="project-preview" aria-label={`Mở ${task.title}`}>
                <img src={asset(task.preview)} alt={`Xem trước ${task.title}`} loading="lazy" />
                <span><BookOpen size={16} /> Chapter {task.number}</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="dance-note section-shell section-divider">
        <Decor name="paper-scrap" className="dance-paper" />
        <Decor name="ribbon" className="dance-ribbon" />
        <motion.div className="dance-copy" {...reveal}>
          <p className="eyebrow">Dance & personal note</p>
          <h2>Chuyển động là cách mình trở về với chính mình.</h2>
          <p>Ngoài việc học, nhảy là niềm đam mê lớn nhất của mình. Mình yêu cảm giác được thể hiện cảm xúc qua từng chuyển động và xem việc nhảy không chỉ là một hoạt động giải trí, mà còn là cách giải tỏa áp lực, rèn luyện sự tự tin và kỷ luật.</p>
        </motion.div>
        <motion.div className="dance-words" {...reveal}>
          <span>feel</span><span>move</span><span>release</span><span>become</span>
        </motion.div>
      </section>

      <section id="summary" className="summary section-shell section-divider">
        <motion.div className="summary-mark" {...reveal}><Sparkles size={22} /><span>Final reflection</span></motion.div>
        <motion.div className="summary-grid" {...reveal}>
          <h2>Một chặng đường khép lại,<br /><em>một hành trình mới bắt đầu.</em></h2>
          <div>
            <p>Đối với mình, hành trình phát triển bản thân không chỉ được đo bằng những thành tích đạt được mà còn bằng những bài học, trải nghiệm và sự trưởng thành sau mỗi thử thách.</p>
            <p>Portfolio này khép lại một chặng đường, nhưng cũng là điểm khởi đầu cho những mục tiêu mới. Mình sẽ tiếp tục học hỏi, sáng tạo và không ngừng hoàn thiện bản thân để tạo ra nhiều giá trị tích cực hơn trong tương lai.</p>
            <p>Sau tất cả, điều quý giá nhất không phải là luôn hoàn hảo hay chưa từng mắc sai lầm, mà là dám bước tiếp và không ngừng học hỏi từ những điều đã qua.</p>
          </div>
        </motion.div>
        <Separator />
        <blockquote className="closing-quote">“Tomorrow is always fresh, with no mistakes in it yet.” <cite>— Anne Shirley</cite></blockquote>
      </section>
    </div>
  );
}
