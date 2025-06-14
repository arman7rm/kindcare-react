import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  fadeDirection: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  buttonLink,
  fadeDirection,
}) => {
  return (
    <article
      data-aos={fadeDirection}
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      className="flex origin-center transform flex-col items-center justify-between overflow-hidden rounded-[20px] bg-[var(--teal)] shadow-2xl transition-all duration-500 ease-in-out hover:scale-105"
    >
      <img
        src={imageSrc}
        alt={title}
        className="h-48 w-full object-cover sm:h-56"
      />

      <div className="flex h-full flex-col items-center px-4 py-6 text-center text-[var(--primary)] sm:px-5 sm:py-8">
        <h3 className="mb-3 text-2xl font-light sm:mb-4 sm:text-3xl md:text-4xl">
          {title}
        </h3>
        <p className="mb-6 flex-grow text-sm sm:mb-8 sm:text-base">
          {description}
        </p>
        <a
          href={buttonLink}
          className="w-max rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--secondary)] sm:px-6 sm:py-3 sm:text-base"
        >
          {buttonText}
        </a>
      </div>
    </article>
  );
};

export default Card;
