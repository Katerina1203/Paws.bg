'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import styles from './singleanimal.module.css';

type Props = {
    photos: Array<{ _id: string, src: string }>
 
}
export default function ImagesPreview({ photos }: Props) {
    const [index, setIndex] = useState(0)
    const str = 'D:\\WorkSpace\\diploma\\public\\'
    const str2 = "D:\\WorkSpace\\test\\diplomna2.0\\public\\"

    const handleIndexChange = (i: number) => {
        setIndex(i)
    }

    return (
        <div className="flex-1 relative min-h-[calc(100vh-200px)] w-full overflow-hidden rounded-3xl shadow-md border-[10px] border-border flex flex-col items-center ">
            <Image src={`/${photos[index].src.replace(str, '').replace(str2, '').replace("\\", "/")}`} alt="animal" fill className={styles.img} />
            <div className={styles.imageRow}>
                {photos.map((photo, i) => {
                    return <div className={styles.imgContainer} key={photo._id} onClick={()=>handleIndexChange(i)}>
                        <Image src={`/${photo.src.replace(str, '').replace(str2, '').replace("\\", "/")}`} alt="animal" fill className={styles.img} />
                    </div>
                })}
            </div>
        </div>
    )
}
