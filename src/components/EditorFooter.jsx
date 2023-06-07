import { Grow } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { run, stop } from "../store/editor.actions";
import { ButtonTw } from "./Buttons";
import { NavWrapper } from "./NavWrapper";
import { ThemeSetter } from "./ThemeSetter";

export const EditorFooter = () => {
    const {
        theme: { styles },
    } = useSelector(state => state);

    return (
        <NavWrapper
            style={{ background: styles.navBg,position:"fixed",bottom:0,width:"100%"}}
            className="justify-start"
        >
            <h1 className="font-extrabold">HackIt</h1>
            <p style={{fontSize:13}}>By Aaditya Sharma 2022-23</p>
            <ThemeSetter />
        </NavWrapper>
    );
};
