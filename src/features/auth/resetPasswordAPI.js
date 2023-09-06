import axios from "axios";

export function resetPassUser(resetToken,password)
{
    return axios.post(`${BACKEND_API}/auth/reset-password/${resetToken}`,password)
}