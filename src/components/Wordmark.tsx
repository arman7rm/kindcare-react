import { Link } from "react-router-dom";

interface WordmarkProps {
  tone?: "dark" | "light";
  onClick?: () => void;
}

const Wordmark = ({ tone = "dark", onClick }: WordmarkProps) => {
  const light = tone === "light";
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="KindCare Health Services home"
      className="flex items-center gap-2.5"
    >
      <span
        className={`grid size-8 place-items-center rounded-full ${
          light ? "bg-sprout text-forest" : "bg-leaf text-pale"
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
          <path d="M12 3 3 10.2V21h6.5v-5.5h5V21H21V10.2L12 3Z" />
        </svg>
      </span>
      <span
        className={`font-serif text-[22px] leading-none tracking-[-0.03em] ${
          light ? "text-bg" : "text-fg"
        }`}
      >
        KindCare
      </span>
      <span
        className={`mt-0.5 hidden text-[11px] font-medium tracking-[0.08em] uppercase sm:inline ${
          light ? "text-bg/60" : "text-muted"
        }`}
      >
        Health Services
      </span>
    </Link>
  );
};

export default Wordmark;
