export interface FormValue {
  value: string
  isValid: boolean | undefined
  errorMessage: string | undefined
}

export interface ApiResponse { token?: string; error?: string }