import React from 'react';

export default function Windchill ({value}) {
    return (
        <div className="windchill">
            <div className="windchill__label">
                Windchill
            </div>
            <div className="windchill__value">
                { value }
            </div>
        </div>
    )
}