import React from "react";

export default function Chat() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button class='absolute bottom-0 mb-4 ml-20 md:box-content py-4 px-7 mt-3 bg-rose-500 hover:bg-rose-700 text-white font-normal' type='button' onClick={() => setShowModal(true)}>
                Lihat Selengkapnya
            </button>
            {showModal ? (
                <>
                    <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative max-w-lg my-6 mx-auto">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="mt-2 text-2xl font-semibold">Captain Barbershop</h3>
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div align='center' className='relative flex-auto px-6 py-2 grid grid-cols-2 gap-2 m-5'>
                                  <div class='col-span-2'>
                                    <img src='/src/assets/images/Barbershop/barbershop1.png' />
                                  </div>
                                  <img class='w-full' src='/src/assets/images/Barbershop/barbershop2.png' />
                                  <img class='w-full' src='/src/assets/images/Barbershop/barbershop3.png' />
                                  <img class='w-full' src='/src/assets/images/Barbershop/barbershop1.png' />
                                  <img class='w-full' src='/src/assets/images/Barbershop/barbershop2.png' />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}


