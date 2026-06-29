import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-full w-auto text-primary"
        fill="none"
      >
        <rect x="1" y="1" width="22" height="22" rx="6" className="fill-primary" />
        <path
          d="M7 12.5l3 3 7-7"
          stroke="var(--primary-foreground)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[1.05rem] font-semibold tracking-tight text-foreground">
        inttax
      </span>
    </span>
  )
}
