import React, { useEffect, useState } from "react"
import { Alert } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"

import { RegisterScreenProps } from "./types"
import { useUserContext } from "../../context/UserContext"
import { FormValue } from "../../types"
import { RootStackParamList } from "../../Navigation"
import useEmailValidator from "../../hooks/useEmailValidator"
import { registerRequestAsync } from "../../api/ApiHandler"

export default function useRegister(): RegisterScreenProps {
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
  const [confirmPasswordForm, setConfirmPasswordForm] = useState<FormValue>({
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
      isValid: passwordForm.value.length > 1,
      errorMessage:
        passwordForm.isValid === false ? "Invalid password" : undefined,
    })
    if (confirmPasswordForm.isValid !== undefined) {
      setConfirmPasswordForm({
        value: confirmPasswordForm.value,
        isValid: confirmPasswordForm.value === passwordForm.value,
        errorMessage:
          confirmPasswordForm.value === passwordForm.value
            ? undefined
            : "Passwords do not match",
      })
    }
  }

  const onChangeConfirmPassword = (confirmPassword: string) => {
    setConfirmPasswordForm({
      value: confirmPassword,
      isValid: confirmPassword === passwordForm.value,
      errorMessage: "",
    })
  }

  const onBlurConfirmPassword = () => {
    setConfirmPasswordForm({
      value: confirmPasswordForm.value,
      isValid: confirmPasswordForm.isValid,
      errorMessage:
        confirmPasswordForm.isValid === false
          ? "Passwords do not match"
          : undefined,
    })
  }

  const handleRegisterPress = () => {
    if (
      emailForm.isValid &&
      passwordForm.isValid &&
      confirmPasswordForm.isValid
    ) {
      registerRequestAsync(emailForm.value, passwordForm.value).then(
        (response) => {
          if (response.token) {
            setToken(response.token)
          } else if (response.error) {
            Alert.alert("Error", response.error)
          }
        }
      )
    } else {
      Alert.alert("Invalid Register")
    }
  }

  return {
    handleRegisterPress,
    emailForm,
    passwordForm,
    confirmPasswordForm,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onBlurEmail,
    onBlurPassword,
    onBlurConfirmPassword,
    navigateToLogin: () => navigation.navigate("Login"),
  }
}
