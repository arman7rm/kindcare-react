import type { ReactNode } from "react";

/**
 * Seamless horizontally scrolling strip. The track holds two copies of the
 * items and slides by half its width. Screen readers get `label` instead.
 */
const Marquee = ({
  items,
  label,
  seconds = 40,
}: {
  items: ReactNode[];
  label: string;
  seconds?: number;
}) => {
  const copy = (hidden: boolean) =>
    items.map((item, i) => (
      <li
        key={`${hidden}-${i}`}
        className="flex shrink-0 items-center gap-10 pr-10"
        aria-hidden={hidden || undefined}
      >
        {item}
        <span className="bg-mint size-1.5 rounded-full" aria-hidden="true" />
      </li>
    ));

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <p className="sr-only">{label}</p>
      <ul
        className="motion-marquee flex w-max group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${seconds}s` }}
        aria-hidden="true"
      >
        {copy(false)}
        {copy(true)}
      </ul>
    </div>
  );
};

export default Marquee;
