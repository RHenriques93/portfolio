import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollButton from "./components/ScrollButton";

import { ConfirmProvider } from "material-ui-confirm";

import Slide from "react-reveal/Slide";

export default function App() {
  return (
    <div>
      <ConfirmProvider>
       
        <Header />
        <ScrollButton />
        <Footer />
        
      </ConfirmProvider>
    </div>
  );
}
