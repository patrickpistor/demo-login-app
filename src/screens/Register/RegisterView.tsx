import React from "react"
import { StyleSheet, Text } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import { Divider } from "../../components/Divider"
import { FormTextInput } from "../../components/FormTextInput"
import { PrimaryButton } from "../../components/PrimaryButton"
import { SecondaryButton } from "../../components/SecondaryButton"
import { RegisterScreenProps } from "./types"

export default function RegisterScreen({
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
  navigateToLogin,
}: RegisterScreenProps) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <FormTextInput
        placeholder="Email"
        label="Email"
        value={emailForm.value}
        onChangeText={onChangeEmail}
        onBlur={onBlurEmail}
        keyboardType="email-address"
        error={emailForm.errorMessage}
      />
      <FormTextInput
        placeholder="Password"
        label="Password"
        value={passwordForm.value}
        onChangeText={onChangePassword}
        onBlur={onBlurPassword}
        secureTextEntry
        error={passwordForm.errorMessage}
      />
      <FormTextInput
        placeholder="Confirm Password"
        label="Confirm Password"
        value={confirmPasswordForm.value}
        onChangeText={onChangeConfirmPassword}
        onBlur={onBlurConfirmPassword}
        secureTextEntry
        error={confirmPasswordForm.errorMessage}
      />
      <PrimaryButton
        onPress={handleRegisterPress}
        title="Register"
        disabled={
          emailForm.isValid &&
          passwordForm.isValid &&
          confirmPasswordForm.isValid
            ? false
            : true
        }
      />
      <Divider />
      <SecondaryButton onPress={navigateToLogin} title="Login" />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 24 },
  header: { fontSize: 30, paddingBottom: 16, textAlign: "center" },
})
