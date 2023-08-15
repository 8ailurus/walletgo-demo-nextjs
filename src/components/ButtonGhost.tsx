import { FC, HTMLAttributes, ReactNode } from "react"

interface ButtonGhostProps extends HTMLAttributes<HTMLButtonElement> {
  label: ReactNode
}

export const ButtonGhost: FC<ButtonGhostProps> = ({ label, ...rest }) => {
  return (
    <button
      className="rounded-x text-[16px] h-36 px-16 inline-flex items-center justify-center select-none bg-transparent text-tc-text-on-primary border border-solid border-tc-itr-border-outline cursor-pointer"
      {...rest}
    >
      {label}
    </button>
  )
}
