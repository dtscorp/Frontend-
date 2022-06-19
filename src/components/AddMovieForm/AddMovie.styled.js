import styled from "styled-components";

const StyledAddMovie = styled.div`
  /* Small Screen */

  margin: 5rem 1rem;
  padding: 1rem;

  .form {
    display: flex;
    flex-direction: column;
  }

  .form__left {
    display: none;
  }

  .form__image {
    max-width: 100%;
    border-radius: 25px;
    height: auto;
  }

  .form__title {
    text-align: center;
    color: #4361ee;
    font-size: 2.44rem;
    margin-bottom: 1rem;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .form__label {
    margin-bottom: 1rem;
  }

  .form__input {
    outline: none;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    border: 1px solid #64748b;
  }

  .form__input:focus {
    border: 1px solid #4361ee;
  }

  .form__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 5rem auto;
    }

    .form {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .form__left {
      display: block;
      flex-basis: 60%;
    }

    .form__right {
      flex-basis: 40%;
    }
  }
`;

export default StyledAddMovie;
