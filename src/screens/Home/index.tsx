import { withHook } from "../../hooks/withHook"
import HomeView from "./HomeView"
import useHome from "./useHome"

const Home = withHook(useHome, HomeView)

export default Home
