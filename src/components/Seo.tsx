import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

type SeoProps = {
  title: string
  description: string
  /**
   * Optional explicit path (e.g. "/membership").
   * If omitted, uses current router location.
   */
  path?: string
  imagePath?: string
}

function siteUrl() {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined
  return (fromEnv?.trim?.() || 'https://ieuk.org').replace(/\/+$/, '')
}

const SITE_NAME = ' | INTERNATIONAL ENGLISH UK'

export default function Seo({
  title: _title,
  description,
  path,
  imagePath = '/social-preview.png',
}: SeoProps) {
  const location = useLocation()

  const base = siteUrl()
  const pathname = path ?? location.pathname
  const canonical = `${base}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`
  const image = imagePath.startsWith('http') ? imagePath : `${base}${imagePath}`

  const pageTitle = SITE_NAME
  const cleanDescription = description.trim()

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={cleanDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={cleanDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={cleanDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

