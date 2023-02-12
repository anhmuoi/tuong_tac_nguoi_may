import React, { useState } from 'react';
import './Filter.scss';
const dataFilter = [
    {
        name: 'all',
    },
    {
        name: 'Digital Marketing',
    },
    {
        name: 'Databases',
    },
    {
        name: 'Microsoft Technologies',
    },
    {
        name: 'Devops',
    },
    {
        name: 'Bussiness Intelligance',
    },

    {
        name: 'Cloud Computing',
    },
];

function Filter() {
    const [filter, setFilter] = useState(0);
    return (
        <div className="filter">
            <div className="filter__heading">Filter By Interest</div>
            <div className="filter__content">
                {dataFilter.map((item, key) => (
                    <>
                        <div key={key} onClick={() => setFilter(key)} className={`filter__name ${filter === key ? 'active' : ''}`}>
                            {item.name}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Filter;
