import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProtocols } from "../../redux/slices/protocolSlice";
import Protocol from "../../components/Protocol/Protocol";


const ProtocolsPage = () => {
  const { protocols, isLoading, error } = useSelector(
    (state) => state.protocols,
  );
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");


  useEffect(() => {
    dispatch(getAllProtocols());
  }, [dispatch]);

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div>ERROR...</div>;
  }

  const filteredProtocols = protocols.filter(
    ({
      id,
      violatorFullName,
      violatorPassportNumber,
      parkOfficer: { full_name, badge_number },
    }) =>
      // id.includes(searchValue )||
      violatorFullName
        .toLowerCase()
        .toString()
        .includes(searchValue.toLowerCase()) ||
      violatorPassportNumber
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      full_name.toLowerCase().includes(searchValue.toLowerCase()) ||
      badge_number.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const protocolsCards = filteredProtocols.map((currentProtocol) => (
    <Protocol key={currentProtocol.id} protocol={currentProtocol} />
  ));

  return (
    <section>
      <input
        type="text"
        value={searchValue}
        onChange={({ target: { value } }) => setSearchValue(value)}
        placeholder="Search..."
      />
      {protocolsCards}
    </section>
  );
};

export default ProtocolsPage;
