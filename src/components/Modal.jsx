import Button from './Button.jsx';

export default function Modal({
  confirmLabel = 'Close',
  isOpen,
  message,
  onClose,
  onConfirm,
  title,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        aria-modal="true"
        className="modal-panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="modal-panel__header">
          <h3>{title}</h3>
          <button className="icon-button" onClick={onClose} type="button">
            ×
          </button>
        </div>
        <p>{message}</p>
        <div className="modal-panel__actions">
          <Button onClick={onConfirm} variant="primary">
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
