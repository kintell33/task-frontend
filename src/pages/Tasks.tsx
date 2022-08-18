import { useEffect, useState } from "react";
import Input from "../components/Input/Input";
import TaskCard from "../components/TaskCard/TaskCard";
import useLoading from "../hooks/useLoading";
import useModal from "../hooks/useModal";
import { CompleteTask, ServiceGetTask } from "../services/TaskService";
import { TaskType } from "../types/TaskType";
import styles from "./Tasks.module.css";

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [fields, setFields] = useState({ amount: 0 });
  const [showLoading, hideLoading] = useLoading();
  const [showModal, hideModal] = useModal();

  useEffect(() => {
    handleGetTasks();
  }, []);

  const handleGetTasks = () => {
    showLoading();
    console.log(fields.amount);
    ServiceGetTask(fields.amount > 0 ? fields.amount : undefined)
      .then((response) => {
        setTasks(response);
      })
      .finally(() => {
        hideLoading();
      });
  };

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
    showLoading();
    CompleteTask(taskId)
      .then((resp) => {
        if (resp) hideModal();
      })
      .finally(() => {
        hideLoading();
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Input
          type="number"
          label="Amount of tasks"
          placeholder="3"
          name={'amount'}
          onChange={(e: any) => {
            setFields({ ...fields, [e.target.name]: e.target.value });
          }}
        ></Input>
        <button onClick={handleGetTasks}>Get tasks!</button>
      </div>
      <div className={styles.tasks}>
        {tasks.map((e, i) => (
          <TaskCard
            key={i}
            onClick={() => {
              onOpenTask(e.title, e.uuid);
            }}
            title={`${e.title} #${i+1}`}
            id={e.uuid}
          ></TaskCard>
        ))}
      </div>
    </div>
  );
}
