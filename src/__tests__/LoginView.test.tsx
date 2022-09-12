import React from "react"
import { render, screen, fireEvent } from "@testing-library/react-native"
import LoginView from "../screens/Login/LoginView"
import { FormValue } from "../types"
import { Alert } from "react-native"

jest.spyOn(Alert, "alert")
jest.mock("react-native-keyboard-aware-scroll-view", () => {
  return {
    KeyboardAwareScrollView: jest
      .fn()
      .mockImplementation(({ children }) => children),
  }
})

test("Valid Login", () => {
  const handleLoginPress = jest.fn()
  const emailForm: FormValue = {
    value: "",
    isValid: undefined,
    errorMessage: "",
  }
  const passwordForm: FormValue = {
    value: "",
    isValid: undefined,
    errorMessage: "",
  }
  const onChangeEmail = jest.fn()
  const onChangePassword = jest.fn()
  const onBlurEmail = jest.fn()
  const onBlurPassword = jest.fn()
  const navigateToRegister = jest.fn()

  render(
    <LoginView
      handleLoginPress={handleLoginPress}
      emailForm={emailForm}
      passwordForm={passwordForm}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onBlurEmail={onBlurEmail}
      onBlurPassword={onBlurPassword}
      navigateToRegister={navigateToRegister}
    />
  )

  const emailInput = screen.getByPlaceholderText("Email")
  const passwordInput = screen.getByPlaceholderText("Password")
  const loginButton = screen.getByText("Login")

  fireEvent.changeText(emailInput, "test@test.co")
  fireEvent.changeText(passwordInput, "password")
  fireEvent.press(loginButton)

  expect(handleLoginPress).toHaveBeenCalledTimes(1)
  expect(Alert.alert).toHaveBeenCalledTimes(0)
})

test("Invalid Login", () => {
  const handleLoginPress = jest.fn()
  const emailForm: FormValue = {
    value: "",
    isValid: undefined,
    errorMessage: "",
  }
  const passwordForm: FormValue = {
    value: "",
    isValid: undefined,
    errorMessage: "",
  }
  const onChangeEmail = jest.fn()
  const onChangePassword = jest.fn()
  const onBlurEmail = jest.fn()
  const onBlurPassword = jest.fn()
  const navigateToRegister = jest.fn()

  render(
    <LoginView
      handleLoginPress={handleLoginPress}
      emailForm={emailForm}
      passwordForm={passwordForm}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onBlurEmail={onBlurEmail}
      onBlurPassword={onBlurPassword}
      navigateToRegister={navigateToRegister}
    />
  )

  const emailInput = screen.getByPlaceholderText("Email")
  const passwordInput = screen.getByPlaceholderText("Password")
  const loginButton = screen.getByText("Login")

  fireEvent.changeText(emailInput, "test@test")
  fireEvent.press(loginButton)
  expect(screen.getByText("Invalid email")).toBeTruthy()

  fireEvent.changeText(passwordInput, "p")
  fireEvent.press(loginButton)
  expect(screen.getByText("Password is too short")).toBeTruthy()
})
