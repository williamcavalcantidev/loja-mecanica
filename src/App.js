import { BrowserRouter,Switch,Route } from "react-router-dom";
import './styles.css';

import Home from './Pages/Home';
import Service from  './Pages/Service';
import contato from './Pages/contato';
import Header from './components/Header';
import Footer from './components/Footer';


const Routes = ()=>{
  return(
    <BrowserRouter>
    
    <Header />

     <Switch>
       <Route path="/" exact={true} component={Home}/>

       <Route path="/service" component={Service}/>

       <Route path="/contato" component={contato}/>
       
     </Switch>

     <Footer />
    </BrowserRouter>
  )
}

export default Routes;