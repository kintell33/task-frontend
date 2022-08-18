import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard/TaskCard";
import useLoading from "../hooks/useLoading";
import useModal from "../hooks/useModal";
import { ServiceGetTask } from "../services/TaskService";
import { TaskType } from "../types/TaskType";
import styles from "./Tasks.module.css";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [showLoading, hideLoading] = useLoading();
  const [showModal, hideModal] = useModal();

  useEffect(() => {
    showLoading();
    ServiceGetTask()
      .then((response) => {
        setTasks(response);
      })
      .finally(() => {
        hideLoading();
      });
  }, []);

  const onOpenTask = (title: string, data: string) => {
    showModal(
      title,
      data,
      () => {
        onCompleteTask(data);
      },
      hideModal
    );
  };

  const onCompleteTask = (taskId: string) => {
    console.log("completed " + taskId);
    hideModal();
  };

  return (
    <div className={styles.container}>
      {tasks.map((e, i) => (
        <TaskCard
          key={i}
          onClick={() => {
            onOpenTask(e.title, e.uuid);
          }}
          title={`${e.title} #${i}`}
          id={e.uuid}
        ></TaskCard>
      ))}
    </div>
  );
}
