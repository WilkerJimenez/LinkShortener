import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './linkshort.css'

function LinkShort() {
    return (
        <>
            <div className='link-divBody'>
                <div className='link-container'>
                    <div className='link-title'>
                        <a>WLinkShortener</a>
                    </div>
                    <div className='link-slogan'>
                        <a>Simple acortador de URLs</a>
                    </div>
                    <div className='link-short'>
                        <div className='link-input'>
                            <input className='' type="text" name="shortener" id="" placeholder='Inserte un link...' />
                        </div>
                        <div className='link-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width={40} height={40}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LinkShort