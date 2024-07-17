import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import "../styles/UserSetlist.css";

const SongPanel = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="container songtab-case">
        <Container className="tab-container">
          <Tabs
            activeKey={activeTab}
            onSelect={() => handleSelect()}
            id="song-tabs"
            className="justify-content-center"
            fill
          >
            {tabs.map((tab, index) => (
              <Tab
                eventKey={index}
                title={
                  <div className="tab-heads d-flex justify-content-center align-items-center">
                    <div className="key mx-2">{tab.key}</div>
                    {tab.title}
                  </div>
                }
                key={index}
              >
                <iframe
                  className="songIframe"
                  width="100%"
                  height="100%"
                  src={tab.content}
                />
              </Tab>
            ))}
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default SongPanel;
