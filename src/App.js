import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "components/Welcome";
import Login from "components/Login";
import Register from "components/Register";
import NotFound from "components/NotFound";
import BirthdayCreateEdit from "components/BirthdayCreateEdit";
import BirthdayDetailView from "components/BirthdayDetailView";
import Settings from "components/Settings";
import { useSelector } from "react-redux";
import "./reset.css";
import "./index.css";
import SelectStart from "components/ListView";
import { GlobalOuterWrapper } from "Globalstyles";
import AboutUs from "components/AboutUs";
import styled from "styled-components";

export const App = () => {
  const menuOpen = useSelector((store) => store.ui.menuOpen);

  return (
    <>
      <GlobalOuterWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/home" element={<SelectStart />}></Route>
            <Route path="/create" element={<BirthdayCreateEdit />}></Route>
            <Route path="/edit/:id" element={<BirthdayCreateEdit />}></Route>
            <Route path="/view/:id" element={<BirthdayDetailView />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalOuterWrapper>
      <BackdropFilter menuOpen={menuOpen} />
    </>
  );
};

const BackdropFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  backdrop-filter: blur(3px);
  z-index: 5;
  display: ${(props) => (props.menuOpen ? "block" : "none")};
`;
