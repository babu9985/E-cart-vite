import React from 'react'
import { menData } from '../data/men';

const Men = () => {
    const firstFiveProducts = menData.slice(0, 6);
    return (
        <>
            <div className="proTitle">
            <h2>Men</h2>
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

export default Men
