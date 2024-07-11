import React from 'react'

export default function Success(props) {
    return (
        <div id="modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100">
            <div className="h-72 ring-1 rounded-[12px] w-2/6 bg-primary p-5 overflow-auto">
                <div className="flex justify-center items-center h-28rounded-t-[12px] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-green-600 font-extrabold size-16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
                <div className="grid grid-cols-1 h-fit items-center m-3 p-3">
                    <div className="flex justify-center items-center">
                        <h1 className="font-bold text-2xl m-5">Success!</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="font-normal text-center">{props.success}</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}
