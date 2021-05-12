import './Button.scss';

function Button({ name, isActive, onClick, mod, type = 'button' }) {
  return (
    <div className="button__wrapper">
      <button
        className={`button ${mod ? `button--${mod}` : ''}`}
        type={type}
        disabled={!isActive}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
