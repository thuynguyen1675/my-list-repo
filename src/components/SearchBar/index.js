import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/?search=${inputValue}`);
    console.log(inputValue);
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
      ></input>
    </form>
  );
};

export default SearchBar;
