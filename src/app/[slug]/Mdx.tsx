import * as React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "../../../lib/utils"

const components = {
  h1: ({ className, ...props } : React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props } : React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b border-b-slate-200 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props } : React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props } : React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props } : React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props } : React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props } : React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-medium text-slate-900 underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props } : React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props } : React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  li: ({ className, ...props } : React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  pre: ({ className, ...props } : React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mt-6 mb-4 overflow-x-auto rounded-lg bg-slate-100 py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props } : React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded border bg-slate-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-slate-600",
        className
      )}
      {...props}
    />
  )
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}