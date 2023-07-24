import { Amplify } from "aws-amplify";
import "./App.css";
import { Authenticator} from "@aws-amplify/ui-react";
import Landing from './components/home/Landing';
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import ownboxLogo from "../src/assets/ownboxLogo.jpg"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FileBucket from "./components/fileBucket/FileBucket";
Amplify.configure(awsExports);

function App() {
  const components = {
    Header() {
      return (
      <img alt="yelpie logo" src={ownboxLogo} className="app-logo"/>
      );
    }
  }  
  return (
    <Authenticator components={components} >
      {({ signOut }) => (
          <div>
            <BrowserRouter>
            <Landing signOut={signOut} />
              <Routes>
              <Route path="/" element={<FileBucket/>} />
                {/* <Route exact path="/" element={<RestaurantList />} /> */}
                {/* <Route path="/dropFile" element={<FileBucket/>} /> */}
              </Routes>
            </BrowserRouter>

          </div>
      )}
    </Authenticator>
  );
}
export default App;