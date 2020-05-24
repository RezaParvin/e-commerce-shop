import React, { Component } from "react";
import MenuItem from "./Menu-Item/Menu-Item";
import "./Directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/selectors/directory";

class Directory extends Component {
  render() {
    const { sections } = this.props;

    return (
      <div className="Directory">
        {sections.map(({ id, ...sections }) => (
          <MenuItem key={id} {...sections} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
