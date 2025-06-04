"use client"
import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function SearchFormReset() {
    const reset = () => {
        const form = document.querySelector(".test") as HTMLFormElement;

        if(form) form.reset()
    }

    return (
        <button type='reset' onClick={reset}>
            <Link href="/" className='size-[50px] rounded-full bg-black flex justify-center items-center text-white'>
                <X/>
            </Link>
        </button>
    )
}

export default SearchFormReset