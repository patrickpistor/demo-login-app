import { withHook } from "../../hooks/withHook"
import LoginView from "./LoginView"
import useLogin from "./useLogin"

const Login = withHook(useLogin, LoginView)

export default Login
