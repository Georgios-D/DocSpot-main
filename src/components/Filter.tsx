import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import BasicRating from "./BasicRating";
import Availability from "./Availability";
import Box from "@mui/material/Box";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
    className?: string;
};

const Filter = ({ className }: Props) => {
    function valuetext(value: number) {
        return `${value}km`;
    }

    const [value, setValue] = useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const [filter, setFilter] = useState(false);
    const handleClick = () => setFilter(!filter);

    return (
        <div className={`w-[350px] h-full hidden p-6 ${className}`}>
            <div className="bg-white w-full h-full p-6">
                <div>
                    <Box sx={{ width: 250 }}>
                        <div>
                            Distance
                            <Slider
                                getAriaLabel={() => "Temperature range"}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </div>
                    </Box>
                    <BasicRating />
                    <div className="mt-4">
                        Availability
                        <Availability />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;
