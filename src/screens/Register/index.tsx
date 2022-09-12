import { withHook } from "../../hooks/withHook"
import RegisterView from "./RegisterView"
import useRegister from "./useRegister"

const Register = withHook(useRegister, RegisterView)

export default Register
