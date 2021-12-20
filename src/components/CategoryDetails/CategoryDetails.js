import React from 'react';

const CategoryDetails = (props) => {
    const {name} = props.products;
    return (
        <div>
            <h4>Category Details : {name}</h4>
        </div>
    );
};

export default CategoryDetails;