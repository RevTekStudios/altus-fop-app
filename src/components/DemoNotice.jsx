export default function DemoNotice({ compact = false, items, title = 'Prototype Notice' }) {
  return (
    <div className={`demo-notice ${compact ? 'demo-notice--compact' : ''}`.trim()}>
      <strong>{title}</strong>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
