import { useRouter } from "next/router";
import styles from "./styles.module.css";

const SortInput = () => {
  const router = useRouter();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: 8 }}>Sort by</span>
      <div className={styles.form}>
        <select
          className={styles.select}
          name="sort"
          id="sort"
          value={router.query?.sort || ""}
          onChange={(e) => {
            router.query.sort = e.target.value;
            router.push(router);
          }}
        >
          <option value="">Normal</option>
          <option value="star">Star</option>
        </select>
      </div>
    </div>
  );
};

export default SortInput;
