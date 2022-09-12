import React from "react"
import { KeyboardType, View } from "react-native"
import { StyleSheet, TextInput, Text } from "react-native"

interface FormTextInputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  keyboardType?: KeyboardType
  onBlur?: () => void
  error?: string
  placeholder?: string
}

export function FormTextInput(props: FormTextInputProps) {
  const {
    label,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    onBlur,
    error,
    placeholder,
  } = props
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onBlur={onBlur}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={"none"}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  // stylish text input
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
})
