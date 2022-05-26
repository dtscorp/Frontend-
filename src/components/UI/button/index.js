import styled, { css } from "styled-components";
// buat  objek color yang berisi warna2

const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  /* cara akses prosp  */
  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors["primary"]};

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.sm &&
    css`
      font-size: 0.8rem;
      padding: 0.2rem 0.5rem;
    `}
    ${(props) =>
    props.md &&
    css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}
    ${(props) =>
    props.lg &&
    css`
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
    `}
`;

export default Button;
