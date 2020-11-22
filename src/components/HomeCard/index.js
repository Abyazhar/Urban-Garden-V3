import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/Cart/cart.actions';
import Button from '../forms/Button';
import '../HomeCard/style.scss'

const Cards = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    documentID,
    productCategory,
    productThumbnail,
    productName,
    productPrice
  } = product;
  if (!documentID || !productCategory || !productThumbnail || !productName ||
    typeof productPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button'
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  };

    return (
        <>
        <section id="best-seller">
        <div className='cards'>
         <h1>Best Sellers of Our Times!</h1>
         <div className="cards__container">
          <div className="cards__wrapper">
           <ul className="cards__items">
           <li className='cards__item'>
               <Link className='cards__item__link' to={`/product/${documentID}`}>
                  <figure className='cards__item__pic-wrap' 
                  data-category={productCategory}>
                    <img src={productThumbnail} alt='best sellers'
                    className='card__item__img'/>
                  </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{productName}</h5>
                </div>
                <div className='cards__item__info'>
                     <span className='cards__item__text'>
                         RM{productPrice}
                     </span>
                </div>
                <div className='cards__button'>
                <Link>
                 <Button buttonStyle='btn--cart'{...configAddToCartBtn} onClick={() => handleAddToCart(product)}
                 >Add to Cart</Button>
                </Link> 
                </div>     
            </Link>
           </li>
           </ul>
          </div>
         </div>
        </div>
        </section> 
        </>
    )
}

export default Cards
