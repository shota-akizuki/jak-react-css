import styles from "./cssmodules.module.scss";

export const CssModules = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>- CSS Modules -</p>
      <button className={styles.button}>FIGHT!</button>
    </div>
  );
};
