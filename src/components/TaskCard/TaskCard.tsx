import styles from "./TaskCard.module.css";

interface Props {
  title: string;
  id: string;
  onClick: () => void;
}

export default function TaskCard({ title, id, onClick }: Props) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.title}>{title}</div>
      <div className={styles.data}>{id}</div>
    </div>
  );
}
