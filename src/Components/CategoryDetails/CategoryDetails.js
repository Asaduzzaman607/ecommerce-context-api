import React from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = (props) => {

    const {name}= props.product

    const category= useContext(CategoryContext);

    
    

    return (
        <div>
            <h2>This is your category details :</h2>
                <h4>selected product: {name}</h4>
        </div>
    );
};

export default CategoryDetails;