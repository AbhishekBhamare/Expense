import React from 'react'

export default function Error(props) {
    return (
        <div id="modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100">
            <div className="h-72 ring-1 rounded-[12px] w-2/6 bg-primary overflow-auto">
                <div className="flex justify-center items-center h-28 bg-red-600 rounded-t-[12px] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>
                <div className="grid grid-cols-1 h-fit items-center m-3 p-3">
                    <div className="flex justify-center items-center">
                        <h1 className="font-bold text-2xl m-5 text-center">Oh Snap!</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="font-normal text-center">{props.error}</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}
