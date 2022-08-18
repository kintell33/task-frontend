import axios from "axios";
import { TaskType } from "../types/TaskType";

const APIURL = process.env.REACT_APP_API_URL;

const ServiceGetTask = (amount?: number): Promise<TaskType[]> => {
  let query = amount ? `?quantity=${amount}` : "";
  return axios.get(`${APIURL}/tasks${query}`).then((response) => response.data);
};

export { ServiceGetTask };
