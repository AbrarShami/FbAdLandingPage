const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="section-header text-center mb-5">
    {badge && <span className="section-badge">{badge}</span>}
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

export default SectionHeader;
