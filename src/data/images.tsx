import logo from '../assets/IEUK_Logo.jpg'
import homeHero from '../assets/1. Home Page Photos/1 Home Page.jpg'
import homeSecondary from '../assets/1. Home Page Photos/2 Home Page.png'

export const images = {
  logo,
  /** Global learning & communication — hero */
  homeHero,
  /** Quality & academic excellence — supporting visual */
  homeSecondary,
  /** Teaching & professional development — overlay cards */
  homeSpotlight: homeHero,
} as const

export type ImageKey = keyof typeof images