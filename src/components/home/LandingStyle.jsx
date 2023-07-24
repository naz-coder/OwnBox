import { styled } from "styled-components";

export const LandingStyle = styled.div`
  .landing-content {
    color: aliceblue;
    padding: 0 3rem;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .landing-content h1 {
    font-size: 5rem;
    margin-top: 2rem;
    text-align: center;
  }

  .landing-content p {
    font-size: 3rem;
    margin-top: -5rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  .landing-content button.create-profile-btn {
    background-color: #454253;
    border: 1px solid #454253;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.35rem 1rem;
    margin-top: 0rem;
    margin-bottom: -1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .landing-content button.create-profile-btn:hover {
    background-color: #7e7799;
    border: 1px solid #7e7799;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    translate: 0.5s;
    cursor: pointer;
  }

  @media only screen and (max-width: 1024px) {
    .landing-content h1 {
      font-size: 4rem;
    }

    .landing-content p {
      font-size: 2rem;
      margin-top: -4rem;
    }
  }

  @media only screen and (max-width: 960px) {
    // padding: 0 3rem;
    .landing-content h1 {
      font-size: 3rem;
    }
    .landing-content p {
      font-size: 2rem;
      margin-top: -3rem;
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 0 1rem;
    .landing-content h1 {
      font-size: 1.8rem;
    }
    .landing-content p {
      font-size: 1.4rem;
      margin-top: -1rem;
    }
  }
`;
