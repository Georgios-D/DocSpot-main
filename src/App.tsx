import React, { useState } from "react";
import Filter from "./components/Filter";
import Results from "./components/Results";
import BasicRating from "./components/BasicRating";
import Navbar from "./components/Navbar";
import { MuiDrawer } from "./components/MuiDrawer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { IconButton } from "@mui/material";

type Props = {};

const App = (props: Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <div className="w-full h-full flex">
            <Navbar />

            <div className="mt-[80px] flex flex-1">
                <Filter className="md:flex" />

                <MuiDrawer
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen}
                />
                <div className="p-6 flex gap-6 flex-col w-full">
                    <div className="w-full flex">
                        <div className="flex md:hidden">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="logo"
                                onClick={() => setIsDrawerOpen(true)}
                            >
                                <FilterAltIcon />
                            </IconButton>
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 p-2"
                        />
                    </div>
                    <Results />
                </div>
            </div>
        </div>
    );
};

export default App;
