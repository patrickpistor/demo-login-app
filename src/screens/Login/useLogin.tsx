import { useState } from "react"
import { Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { LoginScreenProps } from "./types"
import { RootStackParamList } from "../../Navigation"
import useEmailValidator from "../../hooks/useEmailValidator"
import { loginRequestAsync } from "../../api/ApiHandler"
import { useUserContext } from "../../context/UserContext"
import { FormValue } from "../../types"

export default function useLogin(): LoginScreenProps {
  const [emailForm, setEmailForm] = useState<FormValue>({
    value: "",
    isValid: undefined,
    errorMessage: "",
  })
  const [passwordForm, setPasswordForm] = useState<FormValue>({
    value: "",
    isValid: undefined,
    errorMessage: "",
  })
  const { setToken } = useUserContext()
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const onChangeEmail = (email: string) => {
    setEmailForm({
      value: email,
      isValid: useEmailValidator(email),
      errorMessage: "",
    })
  }

  const onBlurEmail = () => {
    setEmailForm({
      value: emailForm.value,
      isValid: emailForm.isValid,
      errorMessage: emailForm.isValid === false ? "Invalid email" : undefined,
    })
  }

  const onChangePassword = (password: string) => {
    setPasswordForm({
      value: password,
      isValid: password.length > 1,
      errorMessage: "",
    })
  }

  const onBlurPassword = () => {
    setPasswordForm({
      value: passwordForm.value,
      isValid: passwordForm.isValid,
      errorMessage:
        passwordForm.value.length > 1 ? undefined : "Password is too short",
    })
  }

  const handleLoginPress = () => {
    if (emailForm.isValid && passwordForm.isValid) {
      loginRequestAsync(emailForm.value, passwordForm.value).then(
        (response) => {
          if (response.token) {
            setToken(response.token)
          } else if (response.error) {
            Alert.alert("Error", response.error)
          }
        }
      )
    } else {
      Alert.alert("Invalid Login")
    }
  }

  return {
    handleLoginPress,
    emailForm,
    passwordForm,
    onChangeEmail,
    onChangePassword,
    onBlurEmail,
    onBlurPassword,
    navigateToRegister: () => navigation.navigate("Register"),
  }
}
