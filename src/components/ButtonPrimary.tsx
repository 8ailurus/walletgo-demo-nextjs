import { FC, HTMLAttributes, ReactNode } from "react"

interface ButtonPrimaryProps extends HTMLAttributes<HTMLButtonElement> {
  label: ReactNode
}

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({ label, ...rest }) => {
  return (
    <button
      className="rounded-x text-[16px] h-44 px-16 inline-flex items-center justify-center select-none bg-tc-itr-primary text-tc-text-on-primary cursor-pointer border-none"
      {...rest}
    >
      {label}
    </button>
  )
}
