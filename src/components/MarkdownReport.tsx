import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { asset } from "../lib";
import { ImageLightbox } from "./ImageLightbox";

function resolveSource(src?: string) {
  if (!src) return "";
  return src.startsWith("ASSET:") ? asset(src.slice(6)) : src;
}

export function MarkdownReport({ content }: { content: string }) {
  return (
    <div className="markdown-report">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h2 className="report-title">{children}</h2>,
          h2: ({ children }) => <h2>{children}</h2>,
          h3: ({ children }) => <h3>{children}</h3>,
          h4: ({ children }) => <h4>{children}</h4>,
          blockquote: ({ children }) => <blockquote className="report-quote">{children}</blockquote>,
          table: ({ children }) => <div className="table-scroll"><table>{children}</table></div>,
          img: ({ src, alt }) => <ImageLightbox src={resolveSource(src)} alt={alt || "Minh chứng trong báo cáo"} />,
          a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer">{children}</a>
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
