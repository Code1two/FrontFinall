// AddPhotoModal.js
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";

function AddPhotoModal() {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "photos"), { url });
      setUrl("");
    } catch (error) {
      alert("Error adding photo: " + error.message);
    }
  };

  return (
    <div
      className="modal fade"
      id="addPhotoModal"
      s
      tabIndex="-1"
      aria-labelledby="addPhotoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addPhotoModalLabel">
              Add Photo
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Photo URL"
                required
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPhotoModal;
