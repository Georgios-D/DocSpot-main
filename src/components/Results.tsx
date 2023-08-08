import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type Props = {};

const data = [
    {
        id: 1,
        name: "Yogges klinik",
        address: "Kungsgatan 1",
        city: "Stockholm",
        zip: "111 22",
    },
    {
        id: 2,
        name: "Dental clinic",
        address: "Trägatan 24C",
        city: "Stockholm",
        zip: "111 22",
    },
    {
        id: 3,
        name: "Fotmassage Stockholm",
        address: "Julvägen 22",
        city: "Stockholm",
        zip: "111 22",
    },
];

type ResultCardProps = {
    name: string;
    address: string;
    city: string;
    zip: string;
};

const ResultCard = ({ name, address, city, zip }: ResultCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div
            className="w-full bg-white h-auto cursor-pointer"
            onClick={() => {
                setIsExpanded(!isExpanded);
            }}
        >
            <div className="flex items-center w-full justify-between px-10 py-4">
                <div className="w-full">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600">{address}</p>
                    <p className="text-gray-600">
                        {city}, {zip}
                    </p>
                    {isExpanded && (
                        <div className="h-64 w-full bg-red-500"></div>
                    )}
                </div>
                {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
        </div>
    );
};

const Results = (props: Props) => {
    return (
        <div className="bg-white-200 flex-1 h-full gap-6 flex flex-col">
            {data.map((item) => (
                <ResultCard
                    key={item.id}
                    name={item.name}
                    address={item.address}
                    city={item.city}
                    zip={item.zip}
                />
            ))}
        </div>
    );
};

export default Results;
