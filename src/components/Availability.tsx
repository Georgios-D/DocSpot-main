import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

type Props = {};

const Availability = (props: Props) => {
    return (
        <FormGroup className="mt-4">
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Closest"
            />
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Cheapest"
            />
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Best"
            />
        </FormGroup>
    );
};

export default Availability;
