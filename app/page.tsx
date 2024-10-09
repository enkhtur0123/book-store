"use client";

import SideNav from "./sidenav";
import WelcomePage from "./welcome/page";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./_redux/store";
import { setValue } from "./_redux/slices/appSlice";

export default function Page() {
  const state = useSelector((state: RootState) => state.state.value);
  const dispatch = useDispatch();

  return state == 0 ? (
    <WelcomePage onClick={() => dispatch(setValue(1))} />
  ) : (
    <MainPage />
  );
}

function MainPage() {
  return (
    <div className="w-full">
      <SideNav />
    </div>
  );
}
