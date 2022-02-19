import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";


import MainLayout from "./layouts/MainLayout";
import Home from './pages/Home';
import ContentPage from "./pages/ContentPage";
import PostPage from "./pages/PostPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path=":title" element={<ContentPage/>}/>
                    <Route path="post-page/:id" element={<PostPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
