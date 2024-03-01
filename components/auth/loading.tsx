import Image from 'next/image';
import React from 'react';


const loading = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full w-full'>
            <Image
            src='/loading.gif'
            alt='loading'
            width={320}
            height={420}
            />
        </div>
    );
};

export default loading;