import React, { useEffect, useState } from "react";
import "../styles/UserSetlist.css";

const SongPanel = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-case">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div key={index}>
            <div
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {tab.title}
              <div className="key mx-2">{tab.key}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="tab-content">
        <iframe className="songIframe" src={tabs[activeTab].content} />
      </div>
    </div>
  );
};

export default SongPanel;
