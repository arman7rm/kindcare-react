import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://www.meetkindcare.com";
const BRAND = "KindCare Health Services";

const PAGES: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${BRAND} | DDD-Approved Supports in New Jersey`,
    description:
      "KindCare Health Services is a New Jersey DDD-approved provider of Community Based Supports, Individual Supports and Respite for adults with intellectual and developmental disabilities.",
  },
  "/services": {
    title: `DDD Services and Service Area | ${BRAND}`,
    description:
      "Community Based Supports, Individual Supports and Respite for adults 21+ in 11 New Jersey counties. How to start, what we need, and how Support Coordinators can refer.",
  },
  "/about": {
    title: `About Us | ${BRAND}`,
    description:
      "Our mission, what families can expect, and how KindCare keeps people safe: DDD requirements, staff screening, training, incident reporting and privacy.",
  },
  "/careers": {
    title: `Careers: Direct Support Professionals | ${BRAND}`,
    description:
      "Become a Direct Support Professional with KindCare. See what DSPs do, what you'll need, and apply online.",
  },
  "/faq": {
    title: `FAQ | ${BRAND}`,
    description:
      "Answers for families and Support Coordinators: who we serve, counties, how to choose KindCare, how long it takes to start, and referrals.",
  },
  "/contact": {
    title: `Contact Us | ${BRAND}`,
    description:
      "Call (551) 221-5439 or email info@meetkindcare.com. Families can request a call back; Support Coordinators can make a referral.",
  },
  "/legal": {
    title: `Compliance, Privacy and Safety | ${BRAND}`,
    description:
      "How KindCare meets DDD requirements, protects personal and health information under HIPAA, and keeps the people we support safe.",
  },
};

const NOT_FOUND = {
  title: `Page not found | ${BRAND}`,
  description: PAGES["/"].description,
};

const setMeta = (selector: string, attr: string, value: string) =>
  document.querySelector(selector)?.setAttribute(attr, value);

/**
 * Keeps the document title, description, canonical URL and og tags in sync
 * with the current route. (Social crawlers read the static tags in
 * index.html; search engines run the JS and see these per-page values.)
 */
const RouteMeta = () => {
  const { pathname: rawPath } = useLocation();
  // "/careers/" and "/careers" are the same page.
  const pathname = rawPath.length > 1 ? rawPath.replace(/\/+$/, "") : rawPath;

  useEffect(() => {
    const page = PAGES[pathname] ?? NOT_FOUND;
    const url = SITE + (pathname === "/" ? "/" : pathname);
    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('link[rel="canonical"]', "href", url);

    // Keep unknown URLs out of search results.
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!PAGES[pathname]) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex";
    } else {
      robots?.remove();
    }
  }, [pathname]);

  return null;
};

export default RouteMeta;
