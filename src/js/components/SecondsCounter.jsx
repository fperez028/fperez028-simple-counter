import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const SecondsCounter = () => {
	return (
        <div className="d-flex flex-column">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous" />
            <div className="container py-5">
                <div className="p-4 shadow bg-body-secondary rounded-3">
                <div className="m-4">
                    <h1 className="display-2">Title</h1>
                    <p className="fs-5">Description Text</p>
                </div>
            </div>
            </div>
        </div>
	);
};