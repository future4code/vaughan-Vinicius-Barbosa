import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CommentFeed from './components/CommentFeed';
import CreateLogin from './components/CreateLogin';
import Feed from './components/Feed';
import Login from './components/Login';


export const Router = () => {

   return (
      <BrowserRouter>
         <Routes>
            <Route exact path={"/"} element={<Login/>} />
            <Route exact path={"/CreateAccount"} element={<CreateLogin />} />
            <Route exact path={"/Feed"} element={<Feed/>} />
            <Route exact path={"/Comment"} element={<CommentFeed />} />
         </Routes>
      </BrowserRouter>
   );
}

