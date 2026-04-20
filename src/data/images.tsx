import logo from '../assets/IEUK_Logo.jpg';
import homeHero from '../assets/1. Home Page Photos/1 Home Page.jpg';

export const images = {
  logo,
  /** Global learning & communication — hero */
  homeHero,
  /** Quality & academic excellence — supporting visual */
  homeSecondary: homeHero,
  /** Teaching & professional development — overlay cards */
  homeSpotlight: homeHero,
} as const;

export type ImageKey = keyof typeof images;