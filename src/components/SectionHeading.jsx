export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mx-auto max-w-3xl text-center" data-reveal>
      <p className="text-sm uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      <h3 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h3>
      {children ? <div className="mt-4 text-lg text-white/70">{children}</div> : null}
    </div>
  );
}
