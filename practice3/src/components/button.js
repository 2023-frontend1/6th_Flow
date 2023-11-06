import { css, styled } from "styled-components";

const Buttons = ({ variant, size, shape, children, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};
export default Buttons;

const variantCSS = {
  btn1: css`
    background-color: gray;
    color: blue;
  `,
  btn2: css`
    background-color: gray;
    color: black;
  `,
};

const sizeCSS = {
  small: css`
    width: 100px;
    aspect-ratio: 8 / 1;
  `,
  medium: css``,
  full: css`
    width: 400px;
    aspect-ratio: 8 / 1;
  `,
};

const shapeCSS = {
  default: css``,
  shape: css`
    border-radius: 10px;
  `,
  round: css`
    border-radius: 20px;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  cursor: pointer;
  border: none;
  &:hover {
    opacity: 0.7;
  }
`;
