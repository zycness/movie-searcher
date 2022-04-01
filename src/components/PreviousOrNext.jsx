import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

const PreviousOrNext = ({ props, poss }) => {
  return (
    <div className={styles.nextOrPreviousPageContainer}>
      <ul className={styles.nextOrPreviousPageList}>
        <li className={styles.nextOrPreviousPageListItem}>
          {props.page > 1 && (
            <Link
              className={styles.nextOrPreviousPageLink}
              to={`/${poss}/Page/${props.page - 1}`}
            >
              Previous
            </Link>
          )}
        </li>
        <li className={styles.nextOrPreviousPageListItem}>
          {props.page < props.total_pages && (
            <Link
              className={styles.nextOrPreviousPageLink}
              to={`/${poss}/Page/${props.page + 1}`}
            >
              Next
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default PreviousOrNext;
