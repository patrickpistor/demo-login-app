import React from "react"
import { StyleSheet, View } from "react-native"

export function Divider() {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
})
