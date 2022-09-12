import { Alert } from "react-native"

export const usePostRequest = async (url: string, body: any) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    return await response.json()
  } catch (error) {
    Alert.alert("Error", error.message)
    console.error(error)
  }
}
