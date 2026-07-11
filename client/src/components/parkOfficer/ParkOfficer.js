import React, { useState } from "react";
import styles from "./ParkOfficer.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteParkOfficer,
  getParkOfficers,
  dismissParkOfficer,
} from "../../redux/slices/parkOfficerSlice";
import DeleteConfirmationModal from "./../Modals/DeleteConfirmation";
import UpdateParkOfficer from "../Modals/UpdateParkOfficer";

const ParkOfficer = ({ parkOfficer }) => {
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] =
    useState(false);

  const [updateParkOfficerOpen, setUpdateParkOfficerOpen] = useState(false);

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
    <article className={styles.cardWrapper}>
      {parkOfficer.fullName}
      <p>Bage number: {parkOfficer.badgeNumber}</p>
      <p>District: {parkOfficer.district}</p>
      <p>{parkOfficer.isWorked ? "Worked" : "Not worked"}</p>
      <button
        onClick={() => {
          setDeleteConfirmationModalOpen(true);
        }}
      >
        DELETE
      </button>
      {deleteConfirmationModalOpen && (
        <DeleteConfirmationModal
          open={deleteConfirmationModalOpen}
          setIsOpen={setDeleteConfirmationModalOpen}
          officerFullName={parkOfficer.fullName}
          deleteCallback={deleteHandler}
        />
      )}

      {parkOfficer.isWorked && (
        <button onClick={dismissHandler}>DISMISS</button>
      )}
      <button
        onClick={() => {
          setUpdateParkOfficerOpen(true);
        }}
      >
        EDIT
      </button>
      {updateParkOfficerOpen && (
        <UpdateParkOfficer
          open={updateParkOfficerOpen}
          setIsOpen={setUpdateParkOfficerOpen}
          officer={parkOfficer}
        />
      )}
    </article>
  );
};

export default ParkOfficer;
