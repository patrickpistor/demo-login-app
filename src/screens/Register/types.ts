import { FormValue } from "../../types";

export interface RegisterScreenProps {
  handleRegisterPress: () => void,
  emailForm: FormValue
  passwordForm: FormValue
  confirmPasswordForm: FormValue
  onChangeEmail: (email: string) => void
  onChangePassword: (password: string) => void
  onChangeConfirmPassword: (confirmPassword: string) => void
  onBlurEmail: () => void
  onBlurPassword: () => void
  onBlurConfirmPassword: () => void
  navigateToLogin: () => void
}