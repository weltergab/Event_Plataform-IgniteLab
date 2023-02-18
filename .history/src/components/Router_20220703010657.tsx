import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Event } from "../pages/Event";


export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Event />}/>
        </Routes>
    )
}