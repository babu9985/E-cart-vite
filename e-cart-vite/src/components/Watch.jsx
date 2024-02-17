import React from 'react'
import { watchData } from '../data/watch';

const Watch = () => {
    const firstFiveProducts = watchData.slice(0, 6);
    return (
        <>
            <div className="proTitle">
                <h2>Watches</h2>
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

export default Watch
