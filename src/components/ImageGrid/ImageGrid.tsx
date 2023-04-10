import "./index.css";
import store from "../../store";
import { Provider } from "react-redux";
import { HomeFeed } from '../../views/HomePage/HomeFeed';

const ImageGrid = () => {
	return (
		<Provider store={store}>
			<HomeFeed/>
		</Provider>
	);
};

export default ImageGrid;
