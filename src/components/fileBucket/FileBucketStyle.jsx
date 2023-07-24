import { styled } from "styled-components";

export const FileBucketStyle = styled.div`
margin: 3vh 20vw;
background-color: #ffffff;
    border: 1px solid #ffffff;
    background-position: right bottom;
    transition: all 0.5s ease-in-out;
    padding: 2rem 2.5rem 2rem 3.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 100%;

.file-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .content {
    padding: 0 3rem;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  input.input-btn{
    display: none;
  }

  .custom-input-btn{
    background-color: #ffdd54;
    border: 1px solid #ffdd54;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.55rem 1rem;
    margin-top: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: 454253;
    font-size: 1.2rem;
  }

  .custom-input-btn:hover {
    background-color: #caa81d;
    border: 1px solid #caa81d;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    translate: 0.5s;
    cursor: pointer;
  }

  button.upload-btn {
    background-color: #2E444E;
    border: 1px solid #2E444E;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.55rem 2rem;
    margin-top: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: white;
    font-size: 1.2rem;
    width: 100%;
  }

  button.upload-btn:hover {
    background-color: #1a2b33;
    border: 1px solid #1a2b33;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    translate: 0.5s;
    cursor: pointer;
  }

  .upload-hero{
    width: 100%;
    height: auto;
    max-width: 500px;
  }

  @media only screen and (max-width: 1500px) {
    margin: 3vh 10vw;
    padding: 1rem 0.5rem 1rem 1.5rem;

  }

  @media only screen and (max-width: 960px) {
    margin: 3vh 7vw;
    padding: 1rem 0.5rem 1rem 1rem;

    // padding: 0 3rem;
    .file-container {
    display: block;
  }

  .content {
    padding: 0 2rem;
    justify-content: left;
    display: flex;
    align-items: left;
  }

  .upload-hero{
    display: block;
    margin-right: auto;
    margin-left: auto;
    }

  }

  @media only screen and (max-width: 425px) {
    margin: 3vh 3vw;
    padding: 1rem 1rem;

    .content {
    padding: 0 0;
    }
}
  `