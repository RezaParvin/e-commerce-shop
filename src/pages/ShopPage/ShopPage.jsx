import React, { Component } from "react";
import "./ShopPage.scss";
import CollectionOverView from "../../components/CollectionOverview/CollectionOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import {
  selectIsFetchingShopData,
  selectIsLoadCollections,
} from "../../redux/selectors/shop";
import { createStructuredSelector } from "reselect";

class ShopPage extends Component {
  componentDidMount() {
    this.props.onGetDataStartAsync();
  }

  render() {
    const { match, isFetching,isLoadCollections } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.url}`}
          render={(props) => (
            <CollectionOverView isLoading={isFetching} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.url}/:categoryId`}
          render={(props) => (
            <CollectionPage isLoading={!isLoadCollections} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetchingShopData,
  isLoadCollections: selectIsLoadCollections,
});

const mapDispatchToProps = (dispatch) => ({
  onGetDataStartAsync: () => {
    dispatch(actions.getShopDataStartAsync());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
