type TagListProps = {
  items: string[]
  label?: string
}

export function TagList({ items, label = 'Technologies' }: TagListProps) {
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}
