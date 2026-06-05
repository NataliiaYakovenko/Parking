import React from "react";
import styles from "./ParkOfficer.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteParkOfficer,
  getParkOfficers,
  dismissParkOfficer,
} from "../../redux/slices/parkOfficerSlice";

const ParkOfficer = ({ parkOfficer }) => {
  const dispatch = useDispatch();

  const deleteHandler = async () => {
    await dispatch(deleteParkOfficer(parkOfficer.id));
    await dispatch(getParkOfficers());
  };

  const dismissHandler = async () => {
    await dispatch(dismissParkOfficer(parkOfficer.id));
    await dispatch(getParkOfficers());
  };

  return (
    <article className={styles.article}>
      {parkOfficer.fullName}
      <p>Bage number: {parkOfficer.badgeNumber}</p>
      <p>District: {parkOfficer.district}</p>
      <p>{parkOfficer.isWorked ? "Worked" : "Not worked"}</p>
      <button onClick={deleteHandler}>DELETE</button>
      <button onClick={dismissHandler}>DISMISS</button>
    </article>
  );
};

export default ParkOfficer;
