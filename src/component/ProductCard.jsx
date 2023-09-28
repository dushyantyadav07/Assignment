import "./ProductCard.scss";

// using props keyword as destructring
function ProductCard({ price, description, image, plan }) {
  return (
    <div className="productCard">
      <section id="pricing" className="section">
        <div className="pricing-plan">
          <h3>{plan}</h3>
          <img src={image} style={{ width: "90px" }} alt="" />
          <p>{price}</p>
          <ul>
            <li>{description}</li>
            {/* Add more features included in the plan */}
          </ul>
          <button>Buy Plan</button>
        </div>
        {/* Add more pricing plans here */}
      </section>
    </div>
  );
}

export default ProductCard;
