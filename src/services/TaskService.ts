import axios from "axios";
import { TaskType } from "../types/TaskType";

const APIURL = process.env.REACT_APP_API_URL;

const ServiceGetTask = (amount?: number): Promise<TaskType[]> => {
  let query = amount ? `?quantity=${amount}` : "";
  return axios.get(`${APIURL}/tasks${query}`).then((response) => response.data);
};

const CompleteTask = (id: string): Promise<boolean> => {
  return axios
    .put(`${APIURL}/tasks/${id}`)
    .then((_) => true)
    .catch((_) => false);
};

export { ServiceGetTask, CompleteTask };
