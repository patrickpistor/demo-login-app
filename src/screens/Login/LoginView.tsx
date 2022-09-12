import React from "react"
import { StyleSheet, Button, Text } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Divider } from "../../components/Divider"

import { FormTextInput } from "../../components/FormTextInput"
import { PrimaryButton } from "../../components/PrimaryButton"
import { SecondaryButton } from "../../components/SecondaryButton"

import { LoginScreenProps } from "./types"

export default function LoginScreen({
  handleLoginPress,
  emailForm,
  passwordForm,
  onChangeEmail,
  onChangePassword,
  onBlurEmail,
  onBlurPassword,
  navigateToRegister,
}: LoginScreenProps) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
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
      <PrimaryButton
        onPress={handleLoginPress}
        title="Login"
        disabled={emailForm.isValid && passwordForm.isValid ? false : true}
      />
      <Divider />
      <SecondaryButton onPress={navigateToRegister} title="Register" />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 24 },
  header: { fontSize: 30, paddingBottom: 16, textAlign: "center" },
})
