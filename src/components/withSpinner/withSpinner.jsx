import React from "react";
import { SpinnerContainer, SpinnerLoader } from "./withSpinner.styles";

const withSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerContainer>
        <SpinnerLoader />
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return spinner;
};

export default withSpinner;
