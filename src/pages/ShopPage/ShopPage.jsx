import React, { Component } from "react";
import "./ShopPage.scss";
import CollectionOverView from "../../components/CollectionOverview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";

class ShopPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.url}`}
          component={CollectionOverView}
        />
        <Route
          exact
          path={`${match.url}/:categoryId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
