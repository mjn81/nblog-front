import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";


import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home';
import ContentPage from "./pages/ContentPage";
import PostPage from "./pages/PostPage";
import {Provider} from "./context/UserContext";


function App() {
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/" element={<MainLayout/>}>
                        <Route path="home" element={<Home/>}/>
                        <Route path=":title" element={<ContentPage/>}/>
                        <Route path="post-page/:id" element={<PostPage/>}/>
                    </Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
