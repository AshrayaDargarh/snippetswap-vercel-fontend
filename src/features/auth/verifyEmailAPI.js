import axios from "axios";
import { BACKEND_API } from "../../config";

export function verifyEmailUser(email)
{
    return axios.post(`${BACKEND_API}/auth/manually-verify`,email)
}