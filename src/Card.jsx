function Card({ cardDetail }) {
  console.log(cardDetail);
  return (
    <div className="card">
      <div className="card-details">
        <h3 className="plan-name">{cardDetail.planName}</h3>
        <h2 className="plan-price">${cardDetail.pricePerMonth}/month</h2>
      </div>
      <div className="card-features">
        <span className="material-symbols-outlined">check_small</span>
        <p className="feature">{cardDetail.users} Users</p>
        <span className="material-symbols-outlined">check_small</span>
        <p className="feature">{cardDetail.storageGB}GB Storage</p>
        {cardDetail.featuresArr.map((feature) => {
          return (
            <>
              <span
                className={`material-symbols-outlined ${
                  !feature[1] ? "fade" : ""
                }`}>
                {feature[1] ? "check" : "close"}_small
              </span>
              <p className={`feature ${!feature[1] ? "fade" : ""}`}>
                {feature[0]}
              </p>
            </>
          );
        })}
      </div>
      <button className="btn">Button</button>
    </div>
  );
}

export default Card;
