import React from 'react'
import { acData } from '../data/ac';

const Ac = () => {
    const firstFiveProducts = acData.slice(0, 6);
    return (
        <>
            <div className="proTitle">
                <h2>AC</h2>
            </div>
            <div className='proSection'>
                {firstFiveProducts.map((mobile) => {
                    return (
                        <div key={mobile.key} className='imgbox'>
                            <img className='proImage' src={mobile.image} alt={mobile.model} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Ac
