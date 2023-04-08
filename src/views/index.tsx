import { Outlet } from "react-router-dom";
import "./rootPage.css";

const RootPage = () => {
	return (
		<div className={"rp001Container no-scroll	bar"}>
			<Outlet />
		</div>
	);
};

export default RootPage;
