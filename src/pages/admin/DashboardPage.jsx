import { SideBar, TopNav, MainContent } from "../../components/admin";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useFetchUser } from "../../hooks";
import { useEffect } from "react";

const DashboardPage = () => {
	const navigator = useNavigate();
	const { data, loading , error } = useFetchUser();

    useEffect(() => {
		if (!data && !loading && !!error) {
			navigator("/user/login");
		}
    }, [data, loading]);
    
	if (!localStorage.getItem("token")) {
		return <Navigate to="/user/login" />;
	}

	return (
		<div className="h-screen w-full flex items-start">
			<SideBar />
			<section className="w-full">
				{data && <TopNav user={data} />}
				<MainContent>
					<Outlet />
				</MainContent>
			</section>
		</div>
	);
};

export default DashboardPage;
