import axios from "axios"
import { BACKEND_API } from "../../config"

export function regUser(user)
{
    return  axios.post(`${BACKEND_API}/auth/signUp`,user)
}