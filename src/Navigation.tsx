import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "./screens/Login"
import Register from "./screens/Register"
import Home from "./screens/Home"
import { useUserContext } from "./context/UserContext"

export type RootStackParamList = {
  Login: undefined
  Register: undefined
  Home: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export function RootStackNavigator() {
  const { token } = useUserContext()
  return (
    <RootStack.Navigator initialRouteName="Login">
      {token === undefined ? (
        <RootStack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Register" component={Register} />
        </RootStack.Group>
      ) : (
        <RootStack.Group>
          <RootStack.Screen name="Home" component={Home} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  )
}
