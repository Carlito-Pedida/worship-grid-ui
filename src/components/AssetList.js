import React from "react";
import AssetContext from "../contexts/AssetContext";
import { Link } from "react-router-dom";
import NewsBanner from "../props/NewsBanner";

const AssetList = () => {
  return (
    <div>
      <NewsBanner
        title="JOIN THE CONVERSATION!"
        subTitle1="See what's latest in the worship community in your area!"
        buttonText="GET ACCESS!"
      />{" "}
      <AssetContext.Consumer>
        {({ asset }) => {
          return (
            <div>
              <h1>Asset List</h1>
              <Link to="/create">Create New Asset</Link>
              {console.log(asset)}
              <div>
                {asset.map((a, i) => {
                  return (
                    <div
                      style={{
                        border: "solid",
                        borderBlockColor: "dimgrey",
                        padding: "20px",
                        borderRadius: "10px",
                        margin: "auto",
                        marginTop: "10px",
                        width: "50%",
                        position: "relative"
                      }}
                      key={i}
                    >
                      <div>
                        <h2>
                          {a.UserDatum.first_name} | {a.UserDatum.last_name}
                        </h2>
                        {/* <img src={a.imageLink} alt="here goes the images" /> */}

                        <p>{a.message}</p>
                        {a.UserResponses && a.UserResponses.length > 0 ? (
                          <div key={a.UserResponses.responses_id}>
                            {a.UserResponses.map((r, i) => (
                              <div
                                style={{
                                  backgroundColor: "dimgray",
                                  padding: "2px",
                                  borderRadius: "15px",
                                  color: "white",
                                  marginTop: "5px"
                                }}
                                key={i}
                              >
                                <p>
                                  <strong>{r.UserDatum.username}</strong>
                                </p>
                                <p>{r.reply}</p>
                                <p>{r.reactions}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>No replies yet!</>
                        )}
                      </div>
                      {/* Video Screen here<div>{a.videoLink}</div> */}
                      <Link to={`/${a.asset_id}/reply`}>reply</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </AssetContext.Consumer>
    </div>
  );
};

export default AssetList;
