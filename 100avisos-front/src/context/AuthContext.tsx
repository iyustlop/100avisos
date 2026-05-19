import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'
import { authService } from '../services/authService'

type AuthContextType = {
  token: string | null
  isAuthenticated: boolean
  login: (usuario: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const login = async (usuario: string, password: string) => {
    await authService.login(usuario, password)
    setToken(localStorage.getItem('token'))
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [token],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
