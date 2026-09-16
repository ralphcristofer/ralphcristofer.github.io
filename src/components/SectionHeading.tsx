type SectionHeadingProps = {
  eyebrow: string
  title: string
  introduction?: string
}

export function SectionHeading({ eyebrow, title, introduction }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {introduction ? <p>{introduction}</p> : null}
    </div>
  )
}
