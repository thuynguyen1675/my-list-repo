import styles from "./styles.module.css";
import { FiStar } from "react-icons/fi";

const RepoCard = ({ info }) => {
  const {
    stargazers_count = 0,
    watchers_count = 0,
    full_name = "",
    description = null,
    avatar_url = "",
    type = "",
    html_url = "",
    language = "",
    updated_at = "",
  } = info;
  return (
    <div className={styles.wrapper}>
      <div className={styles.owner_info}>
        <img
          className={styles.img}
          src={avatar_url}
          alt="avatar"
          width={20}
          height={20}
        />
        <a href={html_url} target="_blank" className={styles.link_repo}>
          {full_name}
        </a>
      </div>
      <p>{description}</p>
      <div className={styles.more_info}>
        <div className={styles.language}>
          <div className={styles.img_language}></div>
          <div>{language}</div>
        </div>
        <span className={styles.gap}>.</span>
        <FiStar className={styles.icon_star} />
        <span>{stargazers_count}</span>
        <span className={styles.gap}>.</span>
        <span>Updated on {updated_at}</span>
      </div>
    </div>
  );
};

export default RepoCard;
