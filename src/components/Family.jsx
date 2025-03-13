import React from 'react';

const Family = () => {
  const stats = [
    { value: "500", label: "Families" },
    { value: "125", label: "Members" },
    { value: "7", label: "Anbiyams" },
    { value: "15", label: "Sangam" }
  ];

  return (
    <div className="container text-center my-5">
      <div className="row">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-3">
            <h2 className="text-success">{stat.value}</h2>
            <p className="text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Family;