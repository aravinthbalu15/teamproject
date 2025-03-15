import React, { useState } from "react";
import Nav from "../components/Nav";
import "../Style/OurParish.css"; // Ensure this CSS file exists

const members = [
  { id: 1, name: "President", dob: "Jan 1, 1980", original:"Aravinth",img: "../src/images/aju.webp" },
  { id: 2, name: "Vice-President", dob: "Feb 15, 1985",original:"Aju", img: "../src/images/image2.png" },
  { id: 3, name: "Secretary Vice", dob: "Mar 22, 1990", original:"Aju",img: "../src/images/image3.png" },
  { id: 4, name: "Secretary", dob: "Apr 10, 1995",original:"Aju", img: "../src/images/image4.png" },
  { id: 5, name: "Treasure", dob: "May 30, 2000",original:"Aju", img: "../src/images/image3.png" }
];

const OurParish = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div>
      <div className="our-parish-container mt-5">
        <h2>Meet Our Parish Members</h2>
        
        <div className="members-list mt-5">
          {members.map((member) => (
            <div
              key={member.id}
              className="member-row"
              onClick={() => setSelectedMember(member)}
            >
              <img src={member.img} alt={member.name} className="member-image" />
              <h3 className="member-name">{member.name}</h3>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="popup-overlay" onClick={() => setSelectedMember(null)}>
            <div className="popup-content animate-popup" onClick={(e) => e.stopPropagation()}>
              <img src={selectedMember.img} alt={selectedMember.name} className="popup-image" />
              <h2>{selectedMember.original}</h2>
              <p>Date of Birth: {selectedMember.dob}</p>
              <button className="close-btn" onClick={() => setSelectedMember(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurParish;
