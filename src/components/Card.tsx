import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  fadeDirection: string;
  features?: string[];
  accentColor?: string;
  featured?: boolean;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  buttonLink,
  fadeDirection,
  features = [],
  accentColor = "var(--primary)",
  featured = false,
}) => {
  return (
    <article
      data-aos={fadeDirection}
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      className={`flex origin-center transform flex-col items-stretch overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl ${
        featured ? "ring-2 ring-[var(--secondary)]" : ""
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[${accentColor}] to-transparent"
          style={{ backgroundColor: accentColor }}
        ></div>
      </div>

      <div className="flex h-full flex-col px-6 py-6 sm:px-8 sm:py-8">
        <h3 
          className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl"
          style={{ color: accentColor }}
        >
          {title}
        </h3>
        <p className="mb-4 text-gray-700 sm:mb-6 sm:text-lg">
          {description}
        </p>
        
        {features.length > 0 && (
          <ul className="mb-6 space-y-2 sm:mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 text-[var(--secondary)]">✓</span>
                <span className="text-gray-700 sm:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4">
          <Link
            to={buttonLink}
            className={`inline-block w-full rounded-lg px-6 py-3 text-center font-bold text-white transition-all hover:opacity-90 sm:text-lg`}
            style={{ backgroundColor: accentColor }}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;