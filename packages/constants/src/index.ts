import { API_ADVERTISER_ROUTE } from "./api/auth"
import { API_TRAVELER_ROUTE } from "./api/auth"
import { API_TASTE_ROUTE } from "./api/auth"
import { API_USER_ROUTE } from "./api/auth"
import { API_SIGNIN_ROUTE } from "./api/auth"
import { API_SIGNUP_ROUTE } from "./api/auth"
import { API_FORGOT_PASSWORD_ROUTE } from "./api/auth"
import { API_RESET_PASSWORD_ROUTE } from "./api/auth"

export const ACCESS_TOKEN = 'accessToken'
export const SIGNIN_TOKEN = 'signinToken'
export const RESET_TOKEN = 'resetToken'

export const ROUTES = {
  SIGNIN: '/signin',
  TRAVELER: {
    DASHBOARD: '/traveler/dashboard',
    TASTE: {
      CREATE: '/traveler/create-taste',
    },
  },
  ADVERTISER: {
    DASHBOARD: '/advertiser/dashboard',
    CREATE_ADVERTISER: '/advertiser/create-advertiser',
  },
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
  },
}

export const ROLES = {
  ADMIN: 'admin',
  TRAVELER: 'traveler',
  ADVERTISER: 'advertiser',
}
