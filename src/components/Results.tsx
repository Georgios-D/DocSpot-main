import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type Props = {};

const data = [
    {
        id: 1,
        name: "Yogges klinik",
        address: "Lantmannagatan 59D",
        city: "Malmö",
        zip: "214 48",
    },
    {
        id: 2,
        name: "Dental clinic",
        address: "Drakegatan 10",
        city: "Göteborg",
        zip: "412 50",
    },
    {
        id: 3,
        name: "Fotmassage Stockholm",
        address: "Hjulsta Backar 12D",
        city: "Stockholm",
        zip: "163 65",
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
                        <div className="h-64 w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                title="map"
                                frameBorder={0}
                                marginHeight={0}
                                marginWidth={0}
                                style={{ filter: "opacity(0.7)" }}
                                src={`https://www.google.com/maps/embed/v1/place?q=${address},+${city},+Sweden&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                            />
                        </div>
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

//react router dom
