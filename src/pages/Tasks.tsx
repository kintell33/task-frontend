import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import useLoading from "../hooks/useLoading";
import { ServiceGetTask } from "../services/TaskService";
import { TaskType } from "../types/TaskType";
import styles from "./Tasks.module.css";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [showLoading, hideLoading] = useLoading();

  useEffect(() => {
    showLoading();
    ServiceGetTask().then((response) => {
      setTasks(response);
    }).finally(()=> {
        hideLoading();
    });
  }, []);

  return (
    <div className={styles.container}>
      {tasks.map((e, i) => (
        <TaskCard title={`${e.title} #${i}`} id={e.uuid}></TaskCard>
      ))}
    </div>
  );
}
