import fopLogo from '../assets/reference/FOP_Logo.png';

export default function FopLogo({ size = 'large', showText = true }) {
  return (
    <div className={`fop-logo fop-logo--${size}`.trim()}>
      <div className="fop-logo__crest">
        <img alt="Official Altus FOP badge" src={fopLogo} />
      </div>
      {showText ? (
        <div className="fop-logo__text">
          <span>Altus FOP Lodge 120</span>
          <small>Official member portal prototype</small>
        </div>
      ) : null}
    </div>
  );
}
