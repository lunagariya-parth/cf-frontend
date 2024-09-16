import { ReactNode, createContext, useState } from 'react'

// Define the type for the context
interface AuthContextType {
  isValid: boolean
  makeValid: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isValid, setIsValid] = useState(false)

  const makeValid = () => {
    setIsValid(true);
    localStorage.setItem('isValid',"true")
  }

  return (
    <AuthContext.Provider value={{ isValid, makeValid }}>
      {children}
    </AuthContext.Provider>
  )
}
