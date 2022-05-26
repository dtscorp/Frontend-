import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: white;

  h1 {
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin: 0;
    }
    ul {
      display: flex;
    }
    li {
      margin: 1rem;
    }
  }
`;
export default StyledNavbar;
