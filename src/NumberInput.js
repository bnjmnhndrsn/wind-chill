import React from 'react';

export default function NumberInput ({label, value, suffix}) {
    return (
        <div className="number-box">
            <div className="number-box__label">
                { label }
            </div>
            <div className="number-box__value">
                <span>
                    { value }
                </span>
                <span>
                    { suffix }
                </span>
            </div>
        </div>
    )
}