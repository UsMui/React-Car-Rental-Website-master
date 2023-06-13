import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import INIT_STATE from '../../store/initState';
import  { UserProvider } from '../../store/context';
import reducer from '../../store/reducer';
import React, {useReducer} from "react";
const Layout = () => {
  const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
  // const [cart,setCart] = useState(localCart);
  const [state,dispatch] = useReducer(reducer,localState);
  return (
    <UserProvider value={{state,dispatch}}>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </UserProvider>
  );
};

export default Layout;
