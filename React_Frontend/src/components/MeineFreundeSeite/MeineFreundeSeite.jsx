import React, { useState } from "react";

import "../Profil/Profil-Design.css";
import "./MeineFreundeSeite.css";

const friends = [
  { id: 1, name: "Friend 1", profilePic: "profile1.jpg" },
  { id: 2, name: "Friend 2", profilePic: "profile2.jpg" },
  { id: 3, name: "Friend 3", profilePic: "profile3.jpg" },
  { id: 4, name: "Friend 4", profilePic: "profile4.jpg" },
  { id: 5, name: "Friend 5", profilePic: "profile5.jpg" },
  { id: 6, name: "Friend 6", profilePic: "profile6.jpg" },
  { id: 7, name: "Friend 7", profilePic: "profile7.jpg" },
  { id: 8, name: "Friend 8", profilePic: "profile8.jpg" },
  { id: 9, name: "Friend 9", profilePic: "profile9.jpg" },
  { id: 10, name: "Friend 10", profilePic: "profile10.jpg" },
  { id: 11, name: "Friend 11", profilePic: "profile11.jpg" },
  { id: 12, name: "Friend 12", profilePic: "profile12.jpg" },
  { id: 13, name: "Friend 13", profilePic: "profile13.jpg" },
  { id: 14, name: "Friend 14", profilePic: "profile14.jpg" },
  { id: 15, name: "Friend 15", profilePic: "profile15.jpg" },
  { id: 16, name: "Friend 16", profilePic: "profile16.jpg" },
  { id: 17, name: "Friend 17", profilePic: "profile17.jpg" },
  { id: 18, name: "Friend 18", profilePic: "profile18.jpg" },
  { id: 19, name: "Friend 19", profilePic: "profile19.jpg" },
  { id: 20, name: "Friend 20", profilePic: "profile20.jpg" },
  { id: 21, name: "Friend 21", profilePic: "profile21.jpg" },
  { id: 22, name: "Friend 22", profilePic: "profile22.jpg" },
  { id: 23, name: "Friend 23", profilePic: "profile23.jpg" },
  { id: 24, name: "Friend 24", profilePic: "profile24.jpg" },
];


const PAGE_SIZE = 24;
const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if ((currentPage + 1) * PAGE_SIZE < friends.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const renderFriends = () => {
    const startIndex = currentPage * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, friends.length);
    const leftFriends = friends.slice(startIndex, startIndex + 12);
    const rightFriends = friends.slice(startIndex + 12, endIndex);
    
    
    return (
      <div className="friends-grid">
        <div className="left-side">
          {leftFriends.map((friend) => (
            <div key={friend.id} className="friend">
              <a href={friend.profileUrl}>
                <img src={friend.imageUrl} alt={friend.name} />
              </a>
            </div>
          ))}
        </div>
        <div className="right-side">
          {rightFriends.map((friend) => (
            <div key={friend.id} className="friend">
              <a href={friend.profileUrl}>
                <img src={friend.imageUrl} alt={friend.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="book-container">
      <img id="bookinfriends" src="/img/book.png" alt="book" />
      {renderFriends()}
       
      <button id="rightbtn1" onClick={handleNextPage}
      disabled={(currentPage + 1) * PAGE_SIZE >= friends.length}>
        Nächste Seite
      </button>
      
      <button id="leftbtn1" onClick={handlePreviousPage}
      disabled={currentPage === 0}>
      
        Vorherigen Seite
      </button>
      
    </div>
  );
};

export default Book;
