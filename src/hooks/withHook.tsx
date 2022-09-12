import React from "react"
import { SafeAreaView } from "react-native"

export const withHook = (
  hook: (props: any) => any,
  Component: React.ComponentType<any>
) => {
  return (props: any) => (
    <SafeAreaView style={{ flex: 1 }}>
      <Component {...props} {...hook(props)} />
    </SafeAreaView>
  )
}
