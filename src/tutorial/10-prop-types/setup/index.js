import React from 'react';
import Product from './Product';
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch';
import image from './ss.png';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example';

const Index = () => {
  const { products, loading } = useFetch(url);
  // console.log(products, loading);
  return (
    <div style={{ margin: '2.5rem 0' }}>
      <p>
        PropTypes are a mechanism to ensure that components use the correct data
        type and pass the right data, and that components use the right type of
        props, and that receiving components receive the right type of props.{' '}
        <br />
        import PropTypes from 'prop-types';
        <br />
        <img
          alt='pic'
          src={image}
          height='200px'
          style={{ margin: '2rem 0', borderRadius: '20px' }}
        />
      </p>
      <hr style={{ margin: '2.5rem 0' }} />
      {loading ? <h2>Loading...</h2> : <h2>products</h2>}
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
