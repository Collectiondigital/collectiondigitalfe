import "./CSS/Pricing.css";

export default function Pricing() {

    return (
        <>
            <h1 className="pricing">Pricing</h1>
            <p className="pricing_text">
                Our pricing is based on the number of objects in one collection.
                This means you only pay for storage needed for each collection you have.
                You can upgrade or downgrade your level at anytime as your collection changes.
                All features and customer support are provided for all levels.
                <br />
                You are welcome to contact us at info@collectiondigital.com with any questions you may have.
            </p>

            <div className="pricing_card_container">
                <div className="pricing_card">
                    <div className="pricing_card_text">
                        <h3>Level 0 - Free</h3>
                        <p>Number of objects: 1-300</p>
                        <p>Features: All</p>
                        <p>Price: Free</p>
                    </div>
                </div>

                <div className="pricing_card">
                    <div className="pricing_card_text">
                        <h3>Level 1 - Medium</h3>
                        <p>Number of objects: 301-500</p>
                        <p>Features: All</p>
                        <p>Price: €50 per month</p>
                    </div>
                </div>

                <div className="pricing_card">
                    <div className="pricing_card_text">
                        <h3>Level 0 - Unlimited</h3>
                        <p>Number of objects: 501+</p>
                        <p>Features: All</p>
                        <p>Price: €250 per month</p>
                    </div>
                </div>
            </div>
        </>
    );
}