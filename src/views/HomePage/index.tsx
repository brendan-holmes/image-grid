import { useParams } from "react-router-dom";
import { HomeFeed } from "./HomeFeed";

const Home = () => {
	const { topicId } = useParams();

	return (
		<>
			<HomeFeed topicId={topicId} />
		</>
	);
};

export default Home;
