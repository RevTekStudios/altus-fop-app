export default function Button({
  children,
  className = '',
  onClick,
  to,
  type = 'button',
  variant = 'primary',
}) {
  const classes = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <a className={classes} href={to}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
