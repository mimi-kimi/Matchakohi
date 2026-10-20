interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  titleId?: string;
  align?: 'start' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  titleId,
  align = 'start',
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">
        <span className="eyebrow__rule" aria-hidden="true" />
        {eyebrow}
      </p>
      <div className="section-heading__row">
        <h2 id={titleId}>{title}</h2>
        {intro ? <p className="section-heading__intro">{intro}</p> : null}
      </div>
    </header>
  );
}
