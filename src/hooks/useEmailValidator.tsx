const useEmailValidator = (email: string): boolean => {
  return (
    email.includes("@") &&
    email.includes(".") &&
    email.split(".").pop()?.length! > 1
  )
}

export default useEmailValidator
