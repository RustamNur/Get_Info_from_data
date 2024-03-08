import React, { useState, useEffect } from "react";
import "./bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.min.css";

const App = () => {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState({});

  const getFetched = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users${id ? `/${id}` : ""}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    getFetched().then((res) => setStudents(res));
  }, []);

  const getSelected = (id) => {
    getFetched(id).then((res) => setSelected(res));
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-7">
          {students.map((value) => {
            return (
              <div key={value.id} className="d-flex gap-4 mb-4">
                <h4>
                  Name : {value.id} {value.name}
                </h4>
                <button
                  onClick={() => getSelected(value.id)}
                  className="btn btn-outline-primary"
                >
                  Get Info
                </button>
              </div>
            );
          })}
        </div>
        <div className="col-5">
          <h4>Name: {selected?.name}</h4>
          <h5>Username: {selected?.username}</h5>
          <h6>Email: {selected?.email}</h6>
        </div>
      </div>
    </div>
  );
};

export default App;
