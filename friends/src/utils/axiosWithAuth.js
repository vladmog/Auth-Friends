import axios from "axios";

export const axiosWithAuth = () => {
  console.log("Token assign start")
  const token = localStorage.getItem("token");
  console.log("Token assign finish")

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "http://localhost:5000/api"
  });
};