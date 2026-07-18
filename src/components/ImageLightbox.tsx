import { ZoomIn } from "lucide-react";
import { Dialog } from "./ui/dialog";

export function ImageLightbox({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={`evidence-figure ${className}`}>
      <Dialog
        title={alt}
        className="image-dialog"
        trigger={
          <button className="image-trigger" type="button" aria-label={`Phóng lớn: ${alt}`}>
            <img src={src} alt={alt} loading="lazy" />
            <span className="zoom-chip"><ZoomIn size={16} /> Phóng lớn</span>
          </button>
        }
      >
        <img src={src} alt={alt} className="dialog-image" />
      </Dialog>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
