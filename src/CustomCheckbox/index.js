import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? props.checkedColor : 'white')}
  transition: all 150ms;

  ${HiddenCheckbox} + & {
    border: 1px solid black;
  }

  // Checkbox visible when checked
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;

const CheckboxOuterBox = styled.div`
  border: 1px solid black;
  padding: 2px 2px 0 2px;
`;

const CustomCheckbox = ({ className, checked, ...props }) => {
  return (
    <CheckboxContainer className={className}>
      <CheckboxOuterBox>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} {...props}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 10" />
          </Icon>
        </StyledCheckbox>
      </CheckboxOuterBox>
    </CheckboxContainer>
  );
};

CustomCheckbox.propTypes = {
  checkedColor: PropTypes.string.isRequired,
  checkbox: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomCheckbox;
