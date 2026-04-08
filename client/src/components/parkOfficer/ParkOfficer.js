import React from "react";

const ParkOfficer = ({ parkOfficer }) => {
  return (
    <article>
      {parkOfficer.fullName}
      <p>Bage number: {parkOfficer.badgeNumber}</p>
      <p>District: {parkOfficer.district}</p>
      <p>{parkOfficer.isWorked ? "Worked" : "Not worked"}</p>
    </article>
  );
};

export default ParkOfficer;
