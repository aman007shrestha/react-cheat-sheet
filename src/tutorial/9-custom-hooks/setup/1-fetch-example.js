import React from 'react';
import { useFetch } from './2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

const Example = () => {
  const { products, loading } = useFetch(url);
  console.log(products);
  return (
    <div style={{ margin: '2.5rem 0' }}>
      <p>
        Custom hooks are a handy way to encapsulate hook-related logic that can
        be re-used across components. <br />
        This is much like encapsulating logic into a well-named function for the
        sake of readability and code organization. After all, it’s a bit tough
        to read a string of useEffect routines and understand what’s going on.
        But if, on the other hand, you have one called something like
        useSyncCustomerRecordStore, then your consumer code is that much more
        readable. <br /> <b>custom hooks must start with use</b>
      </p>
      <h3>{loading ? 'loading...' : 'data'}</h3>
    </div>
  );
};

export default Example;
