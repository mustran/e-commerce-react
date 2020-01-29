import React, { useState } from "react";
import shopData from "./shop-data.json";
import PreviewCollection from "../../components/preview-collection/PreviewCollection.jsx";

const Shop = () => {
    const [collections, setCollections] = useState(shopData);
    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return <PreviewCollection key={id} {...otherCollectionProps} />
                })
            }
        </div>
    )
};

export default Shop;
