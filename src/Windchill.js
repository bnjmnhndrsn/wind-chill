import React from 'react';
import numeral from 'numeral';

export default function Windchill ({value}) {
    return (
        <div className="windchill">
            <div className="windchill__label">
                Windchill
            </div>
            <div className="windchill__value">
                { numeral(value).format('0.0') }
            </div>
        </div>
    )
}