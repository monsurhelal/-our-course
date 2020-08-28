import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlus } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img,name,teacher,price} = props.product;
    const hendleAddCourse = props.hendleAddCourse
    return (
        <div className="product">
            <div className="image">

                <img src={img} alt=""/>

            </div>
            <div>

            <h2 className="product_name">{name}</h2>
            <p className="product_teacher"><small>by:{teacher}</small></p>
            <p className="product_price">price : ${price}</p>
            <button className="addBtn" onClick={() => hendleAddCourse(props.product)}> <FontAwesomeIcon icon={faPlus} /> enroll now</button>

            </div>
            
        </div>
    );
};

export default Product;