import './OrderItem.scss';

function OrderItem({ name, added, description, mod }) {
  return (
    <div className="order-item">
      <span className="order-item__name">{name}</span>
      <span
        className={`order-item__added ${
          mod ? `order-item__added--${mod}` : ''
        }`}
      >
        {added}
      </span>
      <span className="order-item__description">{description}</span>
    </div>
  );
}

export default OrderItem;
