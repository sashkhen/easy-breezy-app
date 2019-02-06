import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 5px 10px;

  outline: none;
  cursor: pointer;

  border: 2px solid var(--black);
  border-radius: none;

  text-decoration: none;
  text-transform: uppercase;

  background: var(--yellow);
  color: var(--black);
`;

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
