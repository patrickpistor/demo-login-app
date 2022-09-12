import React, { createContext, useContext, useEffect, useState } from "react"

export interface UserContextProps {
  token: string | undefined
  setToken: (userToken: string) => void
  logout: () => void
}

export const UserContext = createContext<UserContextProps>({
  token: "",
  setToken: (token: string) => {},
  logout: () => {},
})

interface UserProviderProps {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(undefined)

  const logout = () => {
    setToken(undefined)
  }

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
