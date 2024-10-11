import React from "react";
import TabPanel from "./tabpanel";
import Header from "./header";

export default ({ routes }) => {
  const maxTabCount = 8;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "26px",
          marginBottom: "4px",
        }}
      >
        {[...Array(maxTabCount)].map((Tab, index) => {
          return <Header key={index} name={"tab" + index} />;
        })}
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {[...Array(maxTabCount)].map((tab, index) => {
          return (
            <div
              id={"cust-tab-panel" + index}
              key={index}
              className="cust-tab-panel"
            >
              <div
                style={{
                  border: "1px solid #3333",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                  padding: "8px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <TabPanel
                  key={index}
                  name={"tab" + index}
                  id={index}
                  routes={routes}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
