import logo from '../assets/IEUK_Logo.jpg'
import homeHero from '../assets/1. Home Page Photos/1 Home Page.jpg'
import homeSecondary from '../assets/1. Home Page Photos/2 Home Page.png'
import aboutHero from '../assets/2. About Us Page Photos/1 About Us.jpg'
import aboutVision from '../assets/2. About Us Page Photos/2 About Us.png'
import aboutMission from '../assets/2. About Us Page Photos/3 About Us.png'
import accreditationHero from '../assets/3. Accreditation Page Photos/1 Accreditation Page.png'
import accreditationJourney from '../assets/3. Accreditation Page Photos/2 Accreditation Page.png'
import accreditationBenchmark from '../assets/3. Accreditation Page Photos/3 Accreditation Page.png'
import membershipHero from '../assets/4. Membership Page Photos/1 Membership Page.png'
import membershipTiers from '../assets/4. Membership Page Photos/2 Membership Page.png'
import ourTeamExecutive from '../assets/6. Our Team Page Photos/1 Our Team Page.jpg'
import ourTeamLinguistic from '../assets/6. Our Team Page Photos/2 Our Team Page.jpg'
import ourTeamCreative from '../assets/6. Our Team Page Photos/3 Our Team Page.jpg'
import registryHero from '../assets/5. IEUK Registry Page Photos/1 IEUK Registry Page.png'
import contactHero from '../assets/7. Contact Us Page Photos/1 Contact Us Page.png'

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
  /** Membership — professional network and benefits */
  membershipHero,
  /** Membership — tiers and member categories */
  membershipTiers,
  /** Our Team — executive representatives */
  ourTeamExecutive,
  /** Our Team — linguistic representatives */
  ourTeamLinguistic,
  /** Our Team — creative representatives */
  ourTeamCreative,
  /** Registry — secure record keeping & services */
  registryHero,
  /** Contact — get in touch */
  contactHero,
  /** Teaching & professional development — overlay cards */
  homeSpotlight: homeHero,
} as const

export type ImageKey = keyof typeof images