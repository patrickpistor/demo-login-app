import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"

export default function useHome() {
  const [state, setState] = useState({})
  const navigation = useNavigation()

  useEffect(() => {
    // ...
  }, [])

  const handleLogoutPress = () => {
    // ...
  }

  return {
    handleLogoutPress,
    state,
  }
}
