import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h1>This is Shipment</h1>
            <h1>Category: {category}</h1>
        </div>
    );
};

export default Shipment;