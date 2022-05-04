import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ContentPage from "./pages/ContentPage";
import PostPage from "./pages/PostPage";
import { Provider } from "./context/UserContext";
import AdminLayout from "./layouts/AdminLayout";
import LoginPage from "./pages/admin/LoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import AddPost from "./pages/admin/AddPostPage";
import PostList from "./pages/admin/PostList";
import Info from "./pages/admin/Info";
import NotFound from "./pages/404";
import SearchPage from "./pages/SearchPage";

function App() {
	return (
		<Provider>
			<Router>
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/" element={<MainLayout />}>
						<Route path="home" element={<Home />} />
						<Route path="cat/:title" element={<ContentPage />} />
						<Route path="post-page/:id" element={<PostPage />} />
						<Route path="search/:key" element={<SearchPage />} />
					</Route>

					<Route path="/user" element={<AdminLayout />}>
						<Route path="login" element={<LoginPage />} />
						<Route path="dashboard" element={<DashboardPage />}>
							<Route path="addPost" element={<AddPost />} />
							<Route path="postList" element={<PostList />} />
							<Route path="info" element={<Info />} />
						</Route>
					</Route>

					<Route path="*" element={<NotFound/>} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
