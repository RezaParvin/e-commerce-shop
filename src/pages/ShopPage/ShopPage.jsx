import React, { Component } from "react";
import "./ShopPage.scss";
import { SHOP_DATA } from "../../shared/shop-data";
import  CollectionPreview  from "../../components/CollectionPreview/CollectionPreview";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        <h1>کالکشن</h1>
        {collections.map(({ id, ...other }) => (
          <CollectionPreview key={id} {...other} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
