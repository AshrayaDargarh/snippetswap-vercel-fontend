import axios from "axios";
import { BACKEND_API } from "../../config";

export function forgotPassUser(email)
{
    return axios.post(`${BACKEND_API}/auth/forgot-password`,email)
}