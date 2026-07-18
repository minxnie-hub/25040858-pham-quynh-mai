import { asset } from "../lib";

export function Decor({ name, className = "" }: { name: "ribbon" | "constellation" | "botanical" | "tape" | "paper-scrap" | "quote"; className?: string }) {
  return <img className={`decor decor--${name} ${className}`} src={asset(`/assets/decor/${name}.svg`)} alt="" aria-hidden="true" />;
}
