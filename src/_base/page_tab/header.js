import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveMenu, removeTab } from "../_redux/index";

export default ({ name }) => {
  const dispatch = useDispatch();
  const tabData = useSelector((state) => state.system.tabs[name]);
  const activeMenu = useSelector((state) => state.system.activeMenu);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (tabData && activeMenu && activeMenu.menuUrl === tabData.menuUrl) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeMenu, tabData]);

  if (!tabData) {
    return null;
  }

  return (
    <>
      {active && (
        <div
          style={{
            width: "6px",
            height: "30px",
            marginRight: "-1px",
            borderBottomRightRadius: "8px",
            borderRight: "1px solid #b5bbc4",
          }}
        ></div>
      )}
      <div className={active ? "cust-tab-header-active" : "cust-tab-header"}>
        <div
          onClick={() => {
            dispatch(setActiveMenu(tabData));
          }}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "-6px",
          }}
        >
          {tabData.icon &&
            (tabData.icon.indexOf("/") !== -1 ? (
              <img
                src={tabData.icon}
                className="dx-icon"
                style={{
                  marginRight: "6px",
                  marginTop: "2px",
                  width: "16px",
                  height: "16px",
                }}
              />
            ) : (
              <i
                className={`dx-icon-${tabData.icon ?? "add"}`}
                style={{
                  marginRight: "6px",
                  marginTop: "2px",
                  width: "16px",
                  height: "16px",
                }}
              />
            ))}
          <span>{tabData.text}</span>
        </div>
        <i
          className="dx-icon dx-icon-clear"
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeTab(name));
          }}
          style={{
            marginRight: "4px",
            marginTop: "2px",
            marginLeft: "10px",
            color: "#595959",
          }}
        />
      </div>
      {active && (
        <div
          style={{
            width: "4px",
            height: "30px",
            marginLeft: "-1px",
            borderBottomLeftRadius: "8px",
            borderLeft: "1px solid #b5bbc4",
          }}
        ></div>
      )}
    </>
  );
};
