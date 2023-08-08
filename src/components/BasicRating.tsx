import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {};

const BasicRating = (props: Props) => {
    const [rating, setRating] = useState<number | null>(0);
    return (
        <Box
            sx={{
                "& > legend": { mt: 4 },
            }}
        >
            <Typography component="legend">Rating</Typography>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newRating) => {
                    setRating(newRating);
                }}
            />
        </Box>
    );
};

export default BasicRating;
