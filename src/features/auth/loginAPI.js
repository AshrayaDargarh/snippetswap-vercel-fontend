import axios from "axios";
import { BACKEND_API } from "../../config"

export function logUser(user)
{
    return axios.post(`${BACKEND_API}/auth/login`,user)
}