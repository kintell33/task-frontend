import styles from "./Modal.module.css";

type ModalProps = {
  title: string;
  data: string;
  onAccept: () => void;
  onClose?: () => void;
};

export default function Modal({
  title,
  data,
  onAccept,
  onClose,
}: ModalProps) {
  return (
    <div className={styles.container}>
      <div className={styles.dialog}>
        <div className={styles.information}>
          <div className={styles.title}>{title}</div>
          <div className={styles.data}>{data}</div>
        </div>
        <div className={styles.actions}>
          <button onClick={onAccept}>Complete</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export type { ModalProps };
