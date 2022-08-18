import styles from './Input.module.css';

interface Props {
  type?: string;
  label: string;
  placeholder?: string;
  name:string;
  onChange: (e:any) => void;
}

export default function Input({ type="text", label, placeholder, name, onChange }: Props) {
  return (
    <div className={styles.container}>
      {label}
      <input name={name} type={type} onChange={onChange} placeholder={placeholder} className={styles.input} />
    </div>
  );
}
