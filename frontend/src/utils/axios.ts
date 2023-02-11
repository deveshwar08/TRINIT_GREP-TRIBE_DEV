import axios from 'axios';
/* eslint-disable*/
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
  withCredentials: true,
  // headers: {
  //   Authorization: "Bearer " + localStorage.getItem("-token"),
  // },
});
(axiosInstance.defaults.headers as any).Authorization =
  'Bearer ' + localStorage.getItem('Carbon-token');
