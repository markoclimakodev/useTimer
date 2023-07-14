import { ButtonHTMLAttributes, ElementType } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  isActive?: boolean
}

export function Button({ icon: Icon, isActive = false, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      type="button"
    >
      <Icon
        className={
          isActive
            ? ' fill-grass stroke-grass'
            : 'fill-smoke hover:fill-grass hover:stroke-grass'
        }
      />
    </button>
  )
}
