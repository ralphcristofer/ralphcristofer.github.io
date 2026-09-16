type TagListProps = {
  items: string[]
  label?: string
  /** "text" renders a quiet "a · b · c" line; "chips" renders small badges. */
  variant?: 'text' | 'chips'
}

export function TagList({ items, label = 'Technologies', variant = 'text' }: TagListProps) {
  return (
    <ul className={variant === 'chips' ? 'chip-list' : 'tech-list'} aria-label={label}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}
