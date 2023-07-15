import { ButtonHTMLAttributes, ElementType } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  isActive?: boolean
  title?: string
}

export function Button({
  icon: Icon,
  isActive = false,
  title,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={
        isActive
          ? 'flex cursor-pointer items-end gap-1 text-base font-semibold text-grass disabled:cursor-not-allowed disabled:opacity-50'
          : 'flex cursor-pointer items-end gap-1 text-base font-semibold text-smoke disabled:cursor-not-allowed disabled:opacity-50'
      }
      type="button"
    >
      <Icon
        className={
          isActive
            ? ' h-8 w-8 stroke-grass'
            : 'h-8 w-8 stroke-smoke hover:stroke-grass'
        }
      />
      {title}
    </button>
  )
}
