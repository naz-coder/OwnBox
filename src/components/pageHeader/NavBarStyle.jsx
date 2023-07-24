import { styled } from "styled-components";

export const NavStyle = styled.div`
  background: #ffffff;
  background-position: right bottom;
  transition: all 0.5s ease-in-out;
  padding: 1.5rem 2.5rem 0rem 2.5rem;
  height: 5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  a {
    text-decoration: none;
  }
  .nav-section {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .home-menu {
      color: #454253;
      font-weight: 900;
      font-size: 1.5rem;
    }

    .logo {
      width: 100%;
      max-width: 10rem;
      height: auto;
      margin-top: -0.8rem;
    }
  }

  button.logout-btn {
    background-color: #454253;
    border: 1px solid #454253;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.35rem 1rem;
    margin-top: 0rem;
    // margin-right: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
  }

  button.logout-btn:hover {
    background-color: #7e7799;
    border: 1px solid #7e7799;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    color: #ffffff;
    cursor: pointer;
    translate: 0.5s;
  }

  @media only screen and (max-width: 960px) {
    padding: 1.5rem 0.5rem 0rem 0.5rem;
  }

  @media only screen and (max-width: 425) {
    padding: 1.5rem 0rem 0rem 0rem;

    button.logout-btn {
      font-size: 1rem;
    }
  }
`;
