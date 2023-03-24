import React from "react";

function Table({ data, setId }) {
  console.log(setId);
  return (
    <div className="row ">
      <table class="table-primary table-bordered border-primary">
        <thead>
          <tr>
            <th>Nama Pelatihan</th>
            <th>Deskripsi Pelatihan</th>
            <th>Mulai Pelatihan</th>
            <th>Selesai Pelatihan</th>
            <th>Tempat Pelatihan</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.namapelatihan}</td>
              <td>{item.deskripsipelatihan}</td>
              <td>{item.mulaipelatihan}</td>
              <td>{item.selesaipelatihan}</td>
              <td>{item.tempatpelatihan}</td>
              <td>
                {item.status === null ? (
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setId(item.id)}
                  >
                    Belum Disetujui
                  </button>
                ) : item.status === "setuju" ? (
                  <button
                    type="button"
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setId(item.id)}
                  >
                    Disetujui
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setId(item.id)}
                  >
                    Ditolak
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
