import React from 'react'
import { computerData } from '../data/computers';

const Computers = () => {
    const firstFiveProducts = computerData.slice(0, 6);
    return (
        <>
            <div className="proTitle">
                <h2>Computers</h2>
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

export default Computers
