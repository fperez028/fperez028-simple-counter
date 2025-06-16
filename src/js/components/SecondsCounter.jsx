import React from "react";

//include images into your bundle
import clockIcon from "../../img/clock-regular.svg";

//create your first component
export const SecondsCounter = () => {
	return (
        <div className="d-flex flex-column">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous" />
            <div className="container py-4">
                <div className="row p-2 shadow bg-dark rounded-3 text-center">
                    <div className="col m-4 bg-body-secondary"><img src={clockIcon}/></div>
                    <div className="col m-4 bg-body-secondary"><h1 className="display-2">0</h1></div>
                    <div className="col m-4 bg-body-secondary"><h1 className="display-2">0</h1></div>
                    <div className="col m-4 bg-body-secondary"><h1 className="display-2">0</h1></div>
                    <div className="col m-4 bg-body-secondary"><h1 className="display-2">0</h1></div>
                    <div className="col m-4 bg-body-secondary"><h1 className="display-2">0</h1></div>
                    <div className="col m-4 bg-body-secondary"><h1 className="display-2">0</h1></div>
                </div>
            </div>
        </div>
	);
};