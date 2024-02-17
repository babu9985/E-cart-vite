import React from 'react'
import { womanData } from '../data/woman';

const Women = () => {
    const firstFiveProducts = womanData.slice(0, 6);
    return (
        <>
            <div className="proTitle">
                <h2>Women Dressing</h2>
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

export default Women
