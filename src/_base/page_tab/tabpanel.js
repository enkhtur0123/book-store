import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlert } from "../_redux/index";
import $ from "jquery";

export default ({ id, routes, name }) => {
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

  const page = () => {
    if (tabData) {
      const Component = routes[tabData.menuUrl];
      if (Component) {
        return <Component tabName={name} />;
      } else {
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    if (active) {
      $("#cust-tab-panel" + id).removeClass("cust-tab-panel");
      $("#cust-tab-panel" + id).addClass("cust-tab-panel-active");
    } else {
      $("#cust-tab-panel" + id).removeClass("cust-tab-panel-active");
      $("#cust-tab-panel" + id).addClass("cust-tab-panel");
    }
  }, [active]);

  return page();
};
