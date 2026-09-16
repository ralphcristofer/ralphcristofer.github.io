type SectionHeadingProps = {
  id: string
  title: string
  introduction?: string
}

export function SectionHeading({ id, title, introduction }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      {introduction ? <p>{introduction}</p> : null}
    </div>
  )
}
