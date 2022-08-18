import styles from "./TaskCard.module.css";

interface Props {
  title: string;
  id: string;
}

export default function TaskCard({ title, id }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div>{id}</div>
    </div>
  );
}
