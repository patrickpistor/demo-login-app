import React from "react"
import { usePostRequest } from "../hooks/usePostRequest"

const BASE_URL = "https://reqres.in/api"
const LOGIN = "/login"
const REGISTER = "/register"

export async function loginRequestAsync(
  email: string,
  password: string
): Promise<{ token?: string; error?: string }> {
  return await usePostRequest(BASE_URL + LOGIN, {
    email,
    password,
  })
}

export async function registerRequestAsync(
  email: string,
  password: string
): Promise<{ token?: string; error?: string }> {
  return await usePostRequest(BASE_URL + REGISTER, {
    email,
    password,
  })
}
