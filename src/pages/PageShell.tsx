import type { ReactNode } from 'react'

type PageShellProps = {
  title: string
  children: ReactNode
}

export default function PageShell({ title, children }: PageShellProps) {
  return (
    <article className="mx-auto max-w-2xl">
      <h1 className="mb-4 mt-0 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h1>
      <div className="space-y-4 text-pretty leading-relaxed text-neutral-700">
        {children}
      </div>
    </article>
  )
}
