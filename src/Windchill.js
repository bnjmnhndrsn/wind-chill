import React from 'react';
import numeral from 'numeral';

export default function Windchill ({value}) {
    return (
        <div className="number-box">
            <div className="number-box__label">
                Windchill
            </div>
            <div className="number-box__value">
                <span>
                    { numeral(value).format('0.0') }
                </span>
                <span>
                    ° F
                </span>
            </div>
        </div>
    )
}