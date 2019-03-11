import React from 'react';

export default function NumberInput ({label, value, suffix, onChange}) {
    return (
        <div className="number-box">
            <div className="number-box__label">
                { label }
            </div>
            <div>
                <div className="number-box__value">
                    <span>
                        { value }
                    </span>
                    <span>
                        { suffix }
                    </span>
                </div>
                <div className="number-box__control">
                    <button onClick={() => onChange(value + 1) }>
                        ▲
                    </button>
                    <button onClick={() => onChange(value - 1) }>
                        ▼
                    </button>
                </div>
            </div>
        </div>
    )
}