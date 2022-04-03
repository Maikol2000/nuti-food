import { avtCounselors, bgCounselors } from '@assets/images/counselors'
import React from 'react'
import "./styles.scss";

function CounselorsButton() {
    return (
        <div className='bgPlay'>
            <img className='bg' src={bgCounselors} alt="bg" />
            <img className='avt' src={avtCounselors} alt="avt" />
        </div>
    )
}

export default CounselorsButton