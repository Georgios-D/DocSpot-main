import { Drawer, Box, Typography, IconButton, Slider } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import Filter from "./Filter";
import BasicRating from "./BasicRating";
import Availability from "./Availability";

type Props = {
    setIsDrawerOpen: (isDrawerOpen: boolean) => void;
    isDrawerOpen: boolean;
};

export const MuiDrawer = ({ setIsDrawerOpen, isDrawerOpen }: Props) => {
    return (
        <div className="flex md:hidden flex-col">
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                        Side Panel
                    </Typography>
                    <div>
                        Distance
                        <Slider
                            getAriaLabel={() => "Temperature range"}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <BasicRating />
                    <div className="mt-4">
                        Availability
                        <Availability />
                    </div>
                </Box>
            </Drawer>
        </div>
    );
};
