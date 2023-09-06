import axios from "axios";
import { BACKEND_API } from "../../config";
export function resetPassUser(resetToken,password)
{
    return axios.post(`${BACKEND_API}/auth/reset-password/${resetToken}`,password)
}