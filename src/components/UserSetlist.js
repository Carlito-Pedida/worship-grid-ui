import React, { useEffect, useRef, useState } from "react";
import SongPanel from "../props/SongPanel";
import { useParams } from "react-router-dom";

const UserSetlist = () => {
  const tabs = [
    { title: "I Thank God", key: "G", content: "/I-Thank-God-B.pdf" },
    { title: "I Speak Jesus", key: "D", content: "/I-Speak-Jesus-D.pdf" },
    {
      title: "Blessed Assurance",
      key: "D",
      content: "/blessed-assurance-chords-D.pdf"
    }
  ];
  useEffect(() => {
    document.title = "Worship Grid > Setlist";
  }, []);

  return (
    <div className="">
      <SongPanel tabs={tabs} />
    </div>
  );
};

export default UserSetlist;
