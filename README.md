# React Cards

## Card Component

1. The card component accepts cardDetail prop which contains the details of a
   single card.

2. Populated the card with the cardDetail prop.

```jsx
function Card({ cardDetail }) {
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
```

## Card details Object structure

1. I created a javascript Array containing card details for 3 cards.

2. Looped through the details array and render individual card using the
   respective card details by passing it as a prop.

```js
const cardDetails = [
  {
    planName: "Free",
    pricePerMonth: 0,
    users: "Single",
    storageGB: 50,
    featuresArr: [
      ["Unlimited Public Projects", true],
      ["Community Access", true],
      ["Unlimited Private Projects", false],
      ["Dedicated Phone Support", false],
      ["Free Subdomain", false],
      ["Monthly Status Reports", false],
    ],
  },
  {
    planName: "Plus",
    pricePerMonth: 9,
    users: 5,
    storageGB: 50,
    featuresArr: [
      ["Unlimited Public Projects", true],
      ["Community Access", true],
      ["Unlimited Private Projects", true],
      ["Dedicated Phone Support", true],
      ["Free Subdomain", true],
      ["Monthly Status Reports", false],
    ],
  },
  {
    planName: "Pro",
    pricePerMonth: 49,
    users: "Unlimited",
    storageGB: 50,
    featuresArr: [
      ["Unlimited Public Projects", true],
      ["Community Access", true],
      ["Unlimited Private Projects", true],
      ["Dedicated Phone Support", true],
      ["Free Subdomain", true],
      ["Monthly Status Reports", true],
    ],
  },
];
```
