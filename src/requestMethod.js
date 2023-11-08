import axios from "axios";

const BASE_URL = "https://nadia-backend.onrender.com/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTBiODJlY2E0N2Q3MTkwMzA1NzY2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5OTMxNjg0MywiZXhwIjoxNjk5NTc2MDQzfQ.5OtBNS3pk-YxPD4DvJLN-olNbxfVTu2Of3Wv_g4obII"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
   baseURL: BASE_URL,
   header: {token: `Bearer ${TOKEN}`}
})