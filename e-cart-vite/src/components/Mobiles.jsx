import React from 'react'
import { mobileData } from '../data/mobiles'

const Mobiles = () => {
    const firstFiveProducts = mobileData.slice(0, 6);
    return (
        <>
            <div className="proTitle">
                <h2>Mobiles</h2>
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

export default Mobiles;
