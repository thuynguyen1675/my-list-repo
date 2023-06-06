import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { useState } from "react";

const SearchBar = ({ setData }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([]);
    router.push(`/?search=${inputValue}`);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <BiSearch className={styles.search_icon} />
      <input
        className={styles.input}
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
