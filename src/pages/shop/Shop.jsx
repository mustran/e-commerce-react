import React, { useState } from "react";
import shopData from "./shop-data.json";

const ShopPage = () => {
    const [collections, setCollections] = useState(shopData);

    return <h1>Hello from Shop Page</h1>;
};

export default ShopPage;
