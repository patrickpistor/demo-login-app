import React from "react"
import { Text, StyleSheet, Pressable } from "react-native"

interface PrimaryButtonProps {
  title: string
  onPress: () => void
  disabled: boolean
}

export function PrimaryButton({
  onPress,
  title,
  disabled,
}: PrimaryButtonProps) {
  const getButtonBackgroundColor = (pressed: boolean): string => {
    if (disabled) {
      return "lightgray"
    } else if (pressed) {
      return "rgb(210, 230, 255)"
    }
    return "blue"
  }
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor: getButtonBackgroundColor(pressed),
        },
        styles.button,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
})
