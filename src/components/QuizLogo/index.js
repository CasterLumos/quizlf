import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg
      className={className}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="375px"
      height="74px"
      viewBox="0 0 375 74"
      enableBackground="new 0 0 375 74"
      xmlSpace="preserve"
    >
      {' '}
      <image
        id="image0"
        width="375"
        height="74"
        x="0"
        y="0"
        xlinkHref="data:image/png;base64,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"
      />
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
