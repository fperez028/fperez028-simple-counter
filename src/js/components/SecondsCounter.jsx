import React from "react";
import clockIcon from "../../img/clock-regular.svg";

export const SecondsCounter = ({ seconds }) => {
    const digits = String(seconds).padStart(6, '0').split('');

    return (
        <div className="d-flex flex-column">
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                crossOrigin="anonymous"
            />
            <div className="container py-4">
                <div className="row p-2 bg-dark rounded-3">
                    <div className="col m-4 bg-secondary rounded-3 d-flex align-items-center justify-content-center">
                        <img src={clockIcon} alt="Clock Icon" className="img-fluid" style={{ maxWidth: '70%' }} />
                    </div>
                    {digits.map((digit, index) => (
                        <div key={index} className="col m-4 bg-secondary rounded-3 d-flex align-items-center justify-content-center">
                            <h1 className="display-2 text-white">{digit}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};