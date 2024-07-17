import React, { useEffect } from "react";
import ISpeakJesusD from "../PDFs/ISpeakJesusD.pdf";
import blessedAssuranceD from "../PDFs/blessedAssuranceD.pdf";
import iThankGodB from "../PDFs/iThankGodB.pdf";
import SongPanel from "../props/SongPanel";

const UserSetlist = () => {
  const tabs = [
    { title: "I Thank God", key: "G", content: iThankGodB },
    { title: "I Speak Jesus", key: "D", content: ISpeakJesusD },
    {
      title: "Blessed Assurance",
      key: "D",
      content: blessedAssuranceD
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
