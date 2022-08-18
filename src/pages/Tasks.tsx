import TaskCard from "../components/TaskCard/TaskCard";
import styles from './Tasks.module.css';

export default function Tasks() {
    return <div className={styles.container}>
        <TaskCard title="Titulo #1" id="1"></TaskCard>
        <TaskCard title="Titulo #1" id="1"></TaskCard>
        <TaskCard title="Titulo #1" id="1"></TaskCard>
        <TaskCard title="Titulo #1" id="1"></TaskCard>
    </div>
}