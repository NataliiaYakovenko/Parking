import React from "react";
import styles from "./ParkOfficer.module.scss";

const ParkOfficer = ({ parkOfficer }) => {
  return (
    <article className={styles.article}>
      {parkOfficer.fullName}
      <p>Bage number: {parkOfficer.badgeNumber}</p>
      <p>District: {parkOfficer.district}</p>
      <p>{parkOfficer.isWorked ? "Worked" : "Not worked"}</p>
    </article>
  );
};

export default ParkOfficer;
