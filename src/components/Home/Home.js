import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{border: '2px solid lightblue', margin: '20px', padding: '20px'}}>
            <h1>Home : {category}</h1>
            <Categories />
        </div>
    );
};

export default Home;