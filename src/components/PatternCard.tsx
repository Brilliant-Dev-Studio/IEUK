import { type ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

export type PatternCardPattern = 'stripes' | 'dots' | 'grid' | 'aurora'

const skins: Record<PatternCardPattern, string> = {
  stripes: 'bg-gradient-to-br from-[#651420] via-[#4a1018] to-[#2c080e]',
  dots: 'bg-gradient-to-bl from-[#5a121f] via-[#45121a] to-[#24080d]',
  grid: 'bg-gradient-to-tr from-[#681828] via-[#4e1420] to-[#300c14]',
  aurora: 'bg-gradient-to-br from-[#5c1420] via-[#3a0e16] to-[#180608]',
}

export default function PatternCard({
  title,
  body,
  pattern,
  icon,
  href,
}: {
  title: string
  body: string
  pattern: PatternCardPattern
  icon?: ReactNode
  href?: string
}) {
  const Wrapper: any = href ? 'a' : 'div'

  return (
    <Wrapper
      {...(href
        ? {
            href,
            target: '_self',
          }
        : null)}
      className={[
        'group relative block overflow-hidden rounded-2xl p-5 text-white shadow-[0_12px_36px_rgba(90,12,22,0.22)] ring-1 ring-white/10 transition-[transform,box-shadow] duration-300',
        href
          ? 'hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(90,12,22,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5a0c16]'
          : '',
        skins[pattern],
      ].join(' ')}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        aria-hidden
      />

      {pattern === 'stripes' && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.38] [background-image:repeating-linear-gradient(125deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_14px)]"
          aria-hidden
        />
      )}
      {pattern === 'dots' && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.14)_1px,transparent_1.5px)] [background-size:22px_22px]"
          aria-hidden
        />
      )}
      {pattern === 'grid' && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.26] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:28px_28px]"
          aria-hidden
        />
      )}
      {pattern === 'aurora' && (
        <>
          <div
            className="pointer-events-none absolute -left-1/4 top-0 h-[120%] w-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,200,200,0.14)_0%,transparent_65%)] blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-1/4 bottom-0 h-[90%] w-[55%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(180,140,200,0.12)_0%,transparent_60%)] blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:repeating-conic-gradient(from_0deg_at_50%_50%,transparent_0_25deg,rgba(255,255,255,0.04)_25deg_26deg)]"
            aria-hidden
          />
        </>
      )}

      <div className="relative flex min-h-[172px] flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15"
            aria-hidden={!icon}
          >
            {icon}
          </span>

          {href && (
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4a0a11] shadow-md transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-5 w-5" aria-hidden />
            </span>
          )}
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-bold tracking-tight text-white drop-shadow-sm">
            {title}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-white/85">{body}</p>
        </div>
      </div>
    </Wrapper>
  )
}

