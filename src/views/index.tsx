import { Outlet } from "react-router-dom";
import "./rootPage.css";

const RootPage = () => {
	return (
		<div className={"rp001Container no-scrollbar"}>
			<Outlet />
		</div>
	);
};

export default RootPage;
