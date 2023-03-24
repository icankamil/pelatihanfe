import React, { useEffect, useState } from "react";
import API from "../utils/api";

function Formtambah({ id }) {
  const [data, setData] = useState({});
  const [message, setMessage] = useState({});

  useEffect(() => {
    if (id !== null) {
      API.get(`/api/pelatihan/${id}`).then((response) =>
        setData(response.data)
      );
    }
  });

  const handleChange = (e) => {
    setData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async () => {
    if (id === null) {
      try {
        return await API.post("/api/pelatihan", data)
          .then((response) =>
            setMessage((current) => ({
              status: response.status,
              message: response.data,
            }))
          )
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        return await API.put(`/api/pelatihan/${data.id}`, data)
          .then((response) => {
            setMessage((current) => ({
              status: response.status,
              message: response.data.message,
            }));
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    }
  };

  //   console.log(message);
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="row mx-3 mt-3">
              {message.message !== undefined && (
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>{message.message}</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <div className="mb-3">
                <label for="namapelatihan" className="form-label">
                  Nama Pelatihan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="namapelatihan"
                  aria-describedby="emailHelp"
                  name="namapelatihan"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="deskripsipelatihan" className="form-label">
                  Deskripsi Pelatihan
                </label>
                <textarea
                  className="form-control"
                  id="deskripsipelatihan"
                  name="deskripsipelatihan"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="mulaipelatihan" className="form-label">
                  Mulai Pelatihan
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="mulaipelatihan"
                  name="mulaipelatihan"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="selesaipelatihan" className="form-label">
                  Selesai Pelatihan
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="selesaipelatihan"
                  name="selesaipelatihan"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="tempatpelatihan" className="form-label">
                  Tempat Pelatihan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tempatpelatihan"
                  name="tempatpelatihan"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="statuspelatihan" className="form-label">
                  Status
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="statuspelatihan"
                  name="statuspelatihan"
                  onChange={handleChange}
                >
                  <option selected hidden>
                    Setujui/Tolak
                  </option>
                  <option value="setuju">Setujui</option>
                  <option value="tidaksetuju">Tolak</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formtambah;
