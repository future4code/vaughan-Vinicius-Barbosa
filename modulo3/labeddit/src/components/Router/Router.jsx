import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CreateLogin from '../CreateLogin/CreateLogin';
import Feed from '../Feed/Feed';
import Login from '../Login/Login';
import CommentFeed from '../CommentFeed/CommentFeed';

export const Router = () => {

   return (
      <BrowserRouter>
         <Routes>
            <Route exact path={"/"} element={<Login/>} />
            <Route exact path={"/CreateAccount"} element={<CreateLogin />} />
            <Route exact path={"/Feed"} element={<Feed />} />
            <Route exact path={"/Comments"} element={<CommentFeed />} />
         </Routes>
      </BrowserRouter>
   );
}

