import React, { useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const data=[
        {name:'react js course',price:50,teacher:'sokal',img:'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png'},
        {name:'angular js course',price:70,teacher:'sokal',img:'https://content.techgig.com/thumb/msid-70553803,width-860,resizemode-4/Introduction-to-AngularJS-and-why-you-should-learn-it.jpg?48655'},
        {name:'vue js course',price:52,teacher:'sokal',img:'https://vuejs.org/images/logo.png'},
        {name:'php course',price:70,teacher:'sokal',img:'https://miro.medium.com/max/700/1*Y1hq9sHXG26Fyhys81z8rg.png'},
        {name:'java course',price:45,teacher:'sokal',img:'https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg'},
        {name:'java script course',price:46,teacher:'sokal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsZppufQj60qLc8rp3J0q81T4FCivRE3yVMA&usqp=CAU'},
        {name:'dot net course',price:56,teacher:'sokal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVgtVrhn_oWxkQSv__-Ev6qumFZZQLDXJs3A&usqp=CAU'},
        {name:'pythone course',price:67,teacher:'sokal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQW2To8E0k0NeOfRqgWOwPje8tHwNtQOStw2w&usqp=CAU'},
        {name:'laravel course',price:45,teacher:'sokal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9574_Usjai1VGAWZdQoVyB2zSztKCaDCYYw&usqp=CAU'},
        {name:'mongoDb course',price:54,teacher:'sokal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRK9mqwJwwntPhsogUxZsoba_SrNPUp7rZEbw&usqp=CAU'},
        {name:'photo shop course',price:67,teacher:'sokal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLzeGLOxeAAVZxLyVNpOC2KnVPNuT-XBJ0xg&usqp=CAU'},
        {name:'graphic design course',price:45,teacher:'sokal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSBYfdZMfMOC-7ii5xZzzlgrn8jYqWyo73dA&usqp=CAU'},
        {name:'cpa marketing course',price:34,teacher:'sokal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlLVpGsgMQsl-Mgd-rdynpmd6QQ2m63wmFgQ&usqp=CAU'},
        {name:'web desing course',price:54,teacher:'sokal',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbYrLdmmudFsE1qwMgejfUHMc7jREfmqWK9w&usqp=CAU'}
    ]
   const [products,setProducts]=useState(data);

   const [cart,setCart] = useState([]);
    
    const hendleAddCourse = (product) => {
        const newCart = [...cart,product]
        setCart(newCart);

        }

    return (
        <div className="shop-container">
            <div className="product-container">
                    {

                        products.map(products => <Product product={products} hendleAddCourse ={hendleAddCourse} ></Product>)

                    }
            </div>
            <div className="cart-container">

                    <Cart cart={cart}></Cart>
                   

            </div>
            


        </div>
    );
};

export default Shop;