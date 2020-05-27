import { connect } from "react-redux";
import CollectionPage from "./CollectionPage";
import { createStructuredSelector } from "reselect";
import withSpinner from "../../components/withSpinner/withSpinner";
import { compose } from "redux";
import { selectIsLoadCollections } from "../../redux/selectors/shop";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsLoadCollections(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
