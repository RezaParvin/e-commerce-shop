import { connect } from "react-redux";
import withSpinner from "../withSpinner/withSpinner";
import { createStructuredSelector } from "reselect";
import { selectIsFetchingShopData } from "../../redux/selectors/shop";
import { compose } from "redux";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingShopData,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
