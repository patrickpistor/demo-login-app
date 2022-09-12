import { FormValue } from "../../types";

export interface LoginScreenProps {
  handleLoginPress: () => void
  emailForm: FormValue
  passwordForm: FormValue
  onChangeEmail: (email: string) => void
  onChangePassword: (password: string) => void
  onBlurEmail: () => void
  onBlurPassword: () => void
  navigateToRegister: () => void
}