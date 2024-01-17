import React from "react";
import AssetContext from "../contexts/AssetContext";
import { Link } from "react-router-dom";

const AssetList = () => {
  return (
    <div>
      {" "}
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
                    <div key={i}>
                      <div>
                        <h2>
                          {a.UserDatum.first_name} | {a.UserDatum.last_name}
                        </h2>
                        <img src={a.imageLink} alt="here goes the images" />

                        <p>{a.message}</p>
                      </div>
                      Video Screen here<div>{a.videoLink}</div>
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
