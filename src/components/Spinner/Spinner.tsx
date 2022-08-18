import { MoonLoader } from "react-spinners";
import styles from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.loading}>
      <MoonLoader />
    </div>
  );
}