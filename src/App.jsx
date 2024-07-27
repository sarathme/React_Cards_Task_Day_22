import Card from "./Card";
import "./index.css";

function App() {
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

  return (
    <div className="container">
      <h1 className="heading-primary">React Cards</h1>
      <p className="description">
        Create reusable card component using React library.
      </p>
      <div className="card-block">
        {cardDetails.map((cardDetail) => (
          <Card key={cardDetail.planName} cardDetail={cardDetail} />
        ))}
      </div>
    </div>
  );
}

export default App;
