import React, { Component } from "react";
import "./ShopPage";
import { SHOP_DATA } from "../../shared/shop-data";
import  CollectionPreview  from "../../components/CollectionPreview/CollectionPreview";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    return (
      <div>
        <h2>کالکشن</h2>
        {collections.map(({ id, ...other }) => (
          <CollectionPreview key={id} {...other} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
