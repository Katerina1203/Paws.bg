'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import styles from './singleanimal.module.css';
export default function ImagesPreview({ photos }) {
    const [index, setIndex] = useState(0)
    const str = 'D:\\WorkSpace\\diploma\\public\\'

    const handleIndexChange = (i) => {
        setIndex(i)
    }

    return (
        <div className={styles.imagePreview}>
            <Image src={`/${photos[index].src.replace(str, '')}`} alt="animal" fill className={styles.img} />
            <div className={styles.imageRow}>
                {photos.map((photo, i) => {
                    return <div className={styles.imgContainer} key={photo._id} onClick={()=>handleIndexChange(i)}>
                        <Image src={`/${photo.src.replace(str, '')}`} alt="animal" fill className={styles.img} />
                    </div>
                })}
            </div>
        </div>
    )
}
