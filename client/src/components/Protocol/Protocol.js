import React, { useState } from "react";
import styles from "./Protocol.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  deleteProtocolById,
  getAllProtocols,
} from "../../redux/slices/protocolSlice";
import { useDispatch } from "react-redux";
import AddImage from "../Modals/AddImage";

const Protocol = ({ protocol }) => {
  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] =
    useState(false);

  const [addImageModalOpen, setAddImageModalOpen] = useState(false);

  const dispatch = useDispatch();

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const deleteHandler = async () => {
    await dispatch(
      deleteProtocolById({
        parkOfficerId: protocol.officerId,
        protocolId: protocol.id,
      }),
    );
    await dispatch(getAllProtocols());
  };

  return (
    <article className={styles.cardWrapper}>
      <h1>Protocol №{protocol.id}</h1>

      <p>Service notes: {protocol.serviceNotes}</p>
      <p>Fine amount: {protocol.fineAmount}</p>
      <p>Violator full name:{protocol.violatorFullName}</p>
      <p>Violator passport number: {protocol.violatorPassportNumber}</p>
      <p>Created: {protocol.createdAt}</p>
      <p>Updated:{protocol.updatedAt}</p>

      <p>Officer full name:{protocol.parkOfficer.full_name}</p>
      <p>Officer badge number: {protocol.parkOfficer.badge_number}</p>

      <button onClick={deleteHandler}>DELETE</button>

      <button onClick={() => setAddImageModalOpen(true)}>ADD IMAGE</button>
      {addImageModalOpen && (
        <AddImage
          open={addImageModalOpen}
          setIsOpen={setAddImageModalOpen}
          protocolId={protocol.id}
        />
      )}

      {protocol.image.length > 0 && (
        <Slider {...setting} className={styles.slider}>
          {protocol.image.map((currentImage) => (
            <img
              className={styles.img}
              key={currentImage.id}
              src={`http://localhost:5000/images/${currentImage.path}`}
              alt={protocol.id}
            />
          ))}
        </Slider>
      )}
    </article>
  );
};

export default Protocol;
