import React, { useEffect, useState } from "react";
import API from "../utils/api";
import Table from "./Table";
import Card from "./Card";
import Formtambah from "./Formtambah";

function Dashboard() {
  const [data, setData] = useState([{}]);
  const [info, setInfo] = useState([{}]);
  const [status, setStatus] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    API.get("api/pelatihan").then((response) => {
      console.log(response);
      setData(response.data.pelatihan);
      setInfo(response.data);
    });
  }, []);

  return (
    <div className="row mx-3 my-3">
      <div className="col-4">
        <Card data={info.setuju} header="Disetujui" />
      </div>
      <div className="col-4">
        <Card data={info.belumsetuju} header="Belum Disetujui" />
      </div>
      <div className="col-4">
        <Card data={info.tidaksetuju} header="Tidak Disetujui" />
      </div>
      <div className="col-12 mt-5">
        <h3 className="text-center">Daftar Pelatihan</h3>
        <button
          className="btn btn-primary my-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setId(null)}
        >
          Tambah Pelatihan
        </button>
        <Table data={data} />
        {id === null ? (
          <Formtambah id={null} setId={null} />
        ) : (
          <Formtambah id={id} setId={setId} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
