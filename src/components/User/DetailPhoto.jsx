import React from "react";

export default function DetailPhoto({ businessImage, businessByUUID }) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button class='w-fit h-fit md:box-content text-sm md:text-base rounded py-2 lg:py-4 px-4 lg:px-7 bg-rose-500 hover:bg-rose-700 text-white font-normal' type='button' onClick={() => setShowModal(!showModal)}>
                Lihat Selengkapnya
            </button>
            {showModal ? (
                <div  onBlur={() => setShowModal(!showModal)} >
                    <div className="scale-90 xl:scale-100 w-fit mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative max-w-lg my-6 mx-auto">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="mt-2 text-2xl font-semibold">{businessByUUID?.name}</h3>
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(!showModal)} >
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div align='center' className='relative flex-auto px-6 py-2 grid grid-cols-2 gap-2 m-5 place-items-center'>
                                    <img className="w-52" src={businessImage?.[0]} />
                                    <img className="w-52" src={businessImage?.[1]} />
                                    <img className="w-52" src={businessImage?.[2]} />
                                    <img className="w-52" src={businessImage?.[3]} />
                                    <img className="w-52" src={businessImage?.[4]} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}
        </>
    );
}


