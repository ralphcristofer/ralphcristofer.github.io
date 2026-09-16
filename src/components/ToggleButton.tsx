type ToggleButtonProps = {
  expanded: boolean
  onToggle: () => void
  /** id of the element this button shows and hides */
  controls: string
  showLabel: string
  hideLabel: string
}

/** One consistent "show / hide" button used for every expandable area on the page. */
export function ToggleButton({ expanded, onToggle, controls, showLabel, hideLabel }: ToggleButtonProps) {
  return (
    <button
      className="toggle"
      type="button"
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onToggle}
    >
      {expanded ? hideLabel : showLabel}
      <span className="chevron" aria-hidden="true" />
    </button>
  )
}
