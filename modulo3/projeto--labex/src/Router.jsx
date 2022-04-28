import { Routes, Route,BrowserRouter  } from 'react-router-dom'
import { Homepage } from './components/homePage';
import { TripsPage } from './components/listTripsPage';
import { LoginPage } from './components/loginPage';
import { SignTravel } from './components/formSignUp';
import { AdmHomePage } from './components/adminHomePage';
import { CreateTrip } from './components/createTripPage';



export const Router=()=> {
    return (
       <BrowserRouter>
          <Routes>
                <Route exact path={"/"} element={<Homepage/>}/>
                <Route exact path={"/login"} element={<LoginPage/>}/>
                <Route exact path={"/Viagens"} element={<TripsPage/>}/>
                <Route exact path={"/form"} element={<SignTravel/>}/>
                <Route exact path={"/AdmHome"} element={<AdmHomePage/>}/>
                <Route exact path={"/CreateTrip"} element={<CreateTrip/>}/>

          </Routes>
       </BrowserRouter>
    );
 }
 


 