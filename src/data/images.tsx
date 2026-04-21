import logo from '../assets/IEUK_Logo.jpg'
import homeHero from '../assets/1. Home Page Photos/1 Home Page.jpg'
import homeSecondary from '../assets/1. Home Page Photos/2 Home Page.png'
import aboutHero from '../assets/2. About Us Page Photos/1 About Us.jpg'
import aboutVision from '../assets/2. About Us Page Photos/2 About Us.png'
import aboutMission from '../assets/2. About Us Page Photos/3 About Us.png'
import accreditationHero from '../assets/3. Accreditation Page Photos/1 Accreditation Page.png'
import accreditationJourney from '../assets/3. Accreditation Page Photos/2 Accreditation Page.png'
import accreditationBenchmark from '../assets/3. Accreditation Page Photos/3 Accreditation Page.png'

export const images = {
  logo,
  /** Global learning & communication — hero */
  homeHero,
  /** Quality & academic excellence — supporting visual */
  homeSecondary,
  /** International community — About Us hero */
  aboutHero,
  /** UK setting — About Us vision */
  aboutVision,
  /** Community montage — About Us mission */
  aboutMission,
  /** Accreditation — teams and quality review */
  accreditationHero,
  /** Accreditation journey map */
  accreditationJourney,
  /** Standards & QA benchmark */
  accreditationBenchmark,
  /** Teaching & professional development — overlay cards */
  homeSpotlight: homeHero,
} as const

export type ImageKey = keyof typeof images