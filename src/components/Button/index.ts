import styled from 'styled-components';
import { ButtonProps } from '../../interfaces';

const Button = styled.button<ButtonProps>`
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: ${({
    theme: {
      buttons: {
        default: { borderRadius },
      },
    },
  }) => borderRadius};
  font-size: ${({
    theme: {
      buttons: {
        default: { fontSize },
      },
    },
  }) => fontSize};

  &:hover {
    transition: 0.3s;
  }

  ${({ uppercase }) =>
    uppercase &&
    `
		text-transform: uppercase;
	`}

  ${({ wide }) =>
    wide &&
    `
      width: 100%;
      text-align: center;
	`}

  ${({
    variant,
    state,
    bg,
    borderColor,
    color,
    theme: {
      buttons: { primary, secondary, ghost },
    },
  }) => {
    switch (variant) {
      case 'primary':
        return primary({ state, bg });
      case 'secondary':
        return secondary({ state, borderColor });
      case 'ghost':
        return ghost({ state, color });
      default:
        return null;
    }
  }}

  ${({
    size,
    theme: {
      buttons: {
        sizes: { xlarge, large, medium, small },
      },
    },
  }) => {
    switch (size) {
      case 'xlarge':
        return xlarge();
      case 'large':
        return large();
      case 'medium':
        return medium();
      case 'small':
        return small();
      default:
        return null;
    }
  }}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.black[200]};
    color: ${({ theme }) => theme.colors.black[700]};
  }
`;

export default Button;
