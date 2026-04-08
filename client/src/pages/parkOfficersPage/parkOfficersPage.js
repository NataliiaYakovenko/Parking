import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParkOfficers } from "../../redux/slices/parkOfficerSlice";
import ParkOfficer from "../../components/parkOfficer/ParkOfficer";

const ParkOfficersPage = () => {
  const { parkOfficers, isLoading, error } = useSelector(
    (state) => state.parkOfficers,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParkOfficers());
  }, []);

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div>ERROR...</div>;
  }

  const parkOfiicersCards = parkOfficers.map((currentParkOfficer) => (
    <ParkOfficer key={currentParkOfficer.id} parkOfficer={currentParkOfficer} />
  ));

  return <section>{parkOfiicersCards}</section>;
};

export default ParkOfficersPage;
