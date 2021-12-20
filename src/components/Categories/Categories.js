import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allProducts = [
    {name: 'Asus', category: 'laptop', price: '$32039'},{name: 'Dell', category: 'laptop', price: '$42039'},{name: 'HP', category: 'laptop', price: '$22039'},{name: 'Apple', category: 'laptop', price: '$220039'},
    {name: 'Nokia', category: 'mobile', price: '$200'},{name: 'IPhone', category: 'Mobile', price: '$2000'},{name: 'MI', category: 'Mobile', price: '$250'},{name: 'Samsung', category: 'Mobile', price: '$150'},
    {name: 'Sony', category: 'camera', price: '$120'},{name: 'Nikkon', category: 'camera', price: '$220'},{name: 'Canon', category: 'camera', price: '$2020'},{name: 'Leica', category: 'camera', price: '$200'},
]

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchProducts);
    }, [category])

    return (
        <div>
            <h2>Your Selected Categories: {category}</h2>
            {
                products.map(pd => <CategoryDetails key={pd.name} products={pd} />)
            }
        </div>
    );
};

export default Categories;