import { ButtonHTMLAttributes, ElementType } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function Button({ icon: Icon, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Icon className=" fill-smoke hover:fill-grass hover:stroke-grass" />
    </button>
  )
}
