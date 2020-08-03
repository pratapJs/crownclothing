import React, { Component } from 'react';
import SHOP_DATA from './ShopData';
import '../../components/PreviewCollection/PreviewCollection';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

export class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
