import React, { Component } from "react";
import "./ShopPage.scss";
import CollectionOverViewContainer from "../../components/CollectionOverview/CollectionOverviewContainer";
import { Route } from "react-router-dom";
import CollectionPageConatienr from "../CollectionPage/CollectionPageContainer";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

class ShopPage extends Component {
  componentDidMount() {
    this.props.onGetDataStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.url}`}
          component={CollectionOverViewContainer}
        />
        <Route
          exact
          path={`${match.url}/:categoryId`}
          component={CollectionPageConatienr}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetDataStartAsync: () => {
    dispatch(actions.getShopDataStartAsync());
  },
});

export default connect(null, mapDispatchToProps)(ShopPage);
