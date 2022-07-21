import axios from "axios"
export const fetchUsers = () => axios.get("https://jsonplaceholder.typicode.com/users");
export const fetchUser = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);