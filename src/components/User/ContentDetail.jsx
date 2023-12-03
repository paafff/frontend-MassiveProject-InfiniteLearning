import React from 'react';
import ChatNow from './ChatNow';

const ContentDetail = () => {
    return (
        <div class='grid grid-cols-3'>
            <div class='col-span-2'>
                <h1 class='text-3xl font-bold mt-10'>Captain Barbershop</h1>
                <div class='flex flex-row mt-2'>
                    <h6 class='text-teal-500 mr-8'>Buka</h6>
                    <img class='h-4 mt-1 mr-1' src='/src/assets/images/icons/Location.png' />
                    <h6 class='mr-8'>Bekasi Kota</h6>
                    <div class='ml-3 my-auto flex flex-row'>
                        <img class='h-3' src='/src/assets/images/icons/Star.png' />
                        <h6 class='ml-1 text-xs'>4.8</h6>
                    </div>
                </div>
                <div class='flex flex-row mt-2 ml-40'>
                    <div class='flex flex-row border border-rose-400 rounded mr-3'>
                        <img class='h-3 my-auto mx-2' src='/src/assets/images/icons/Bookmark.png' />
                        <h6 class='mr-2 my-1'>Simpan</h6>
                    </div>
                    <div class='flex flex-row border border-rose-400 rounded'>
                        <img class='h-4 my-auto mx-2' src='/src/assets/images/icons/PinkShare.png' />
                        <h6 class='mr-2 my-1'>Bagikan</h6>
                    </div>
                </div>
                <div class='flex flex-row mt-10'>
                    <div>
                        <h1 class='font-bold text-2xl'>Dikelola oleh Ranto</h1>
                        <h6 class='text-slate-500'>@captainbarbershop</h6>
                    </div>
                    <img class='w-14 ml-40' src='/src/assets/images/profiles/ProfileDummy1.png' />
                </div>
                <hr class='mt-8 mb-10' />
                <div>
                    <h1 class='font-bold text-2xl'>Deskripsi Barbershop</h1>
                    <p>Captain barbershop adalah merek barbershop premium di Indonesia. kami dengan memberikan layanan berkualitas tinggi seperti perlengkapan sanitasi, fasilitas nyaman, dan tukang cukur berpengalaman.
                        <br />......
                        <br /><b>lihat lebih banyak</b></p>
                </div>
                <hr class='mt-8 mb-10' />
                <div>
                    <div>
                        <h1 class='font-bold text-2xl'>Jenis Layanan</h1>
                        <div class='columns-2'>
                            <div class='flex flex-row mt-2'>
                                <img class='w-5 ml-1 mr-4' src='/src/assets/images/icons/Massage.png' />
                                <h1 class='text-slate-500'>Pijat</h1>
                            </div>
                            <h1>Rp 15.000,00</h1>
                        </div>
                        <div class='columns-2'>
                            <div class='flex flex-row mt-2'>
                                <img class='w-5 ml-1 mr-4' src='/src/assets/images/icons/Scrissor.png' />
                                <h1 class='text-slate-500'>Potong Rambut</h1>
                            </div>
                            <h1>Rp 55.000,00</h1>
                        </div>
                    </div>
                </div>
                <hr class='mt-8 mb-10' />
                <div>
                    <h1 class='font-bold text-2xl'>Jam Operasional</h1>
                    <div class='flex flex-row ml-1 mt-2'>
                        <img class='w-auto h-5 mr-4' src='/src/assets/images/icons/Clock.png ' />
                        <h1>Buka / Tutup : 09:00 - 16:00</h1>
                    </div>
                </div>
                <hr class='mt-8 mb-10' />
                <div>
                    <h1 class='font-bold text-2xl'>Daftar Karyawan</h1>
                    <div class='grid grid-cols-4 ml-1 mt-2'>
                        <div>
                            <h1 class='text-slate-500'>Foto</h1>
                            <img class='my-1' src='/src/assets/images/icons/IconUser.png' />
                        </div>
                        <div class='col-span-2'>
                            <h1 class='my-1 text-slate-500'>Nama</h1>
                            <h1>Agus Munawar</h1>
                        </div>
                        <div>
                            <h1 class='my-1 text-slate-500'>Skill</h1>
                            <h1>Cut Hair</h1>
                        </div>
                    </div>
                </div>
                <hr class='mt-8 mb-10' />
                <div>
                    <h1 class='font-bold text-2xl'>Lokasi dan Lingkungan Sekitar</h1>
                    <div class='flex flex-row'>
                        <img class='h-4 mt-1 mx-1' src='/src/assets/images/icons/Location.png' />
                        <h1>Kecamatan Bekasi, Kota Bekasi, Jawa Barat</h1>
                    </div>
                </div>
                <hr class='mt-8 mb-10' />
                <div>
                    <h1 class='font-semibold text-lg'>4.8 (3 Ulasan)</h1>
                    <div class='mt-10 ml-5 flex flex-row'>
                        <img src='/src/assets/images/icons/AvatarEllipse1.png' />
                        <div class='ml-2 flex flex-row gap gap-x-2'>
                            <div class='ml-1'>
                                <h4 class='font-semibold'>Putri L.</h4>
                                <h6 class='text-xs text-gray-500'>2 minggu yang lalu</h6>
                            </div>
                            <div class='border border-rose-400 flex flex-row py-1 px-1 h-6'>
                                <img class='h-3 mr-1' src='/src/assets/images/icons/Star.png' />
                                <h6 class='text-xs'>5.0</h6>
                            </div>
                        </div>
                    </div>
                    <p class='text-xs ml-20'>Pelayanan ramah, harga terjangkau tapi bisa dapatin model rambut yang keren bangettt</p>
                </div>
            </div>
            <div align='center'>
                <div class='md:box-content overflow-hidden shadow-xl mt-10 px-5 py-8'>
                    <ChatNow/>
                    <br/>
                    <button class='md:box-content py-4 px-7 mt-3 bg-rose-500 hover:bg-rose-700 text-white font-normal'>
                        <h1 class='text-lg'>Pesan Sekarang</h1>
                    </button>
                </div>
                <div class='max-w-xs overflow-hidden shadow-xl mt-10 inline-flex items-center px-8 py-2 gap gap-2 rounded-3xl divide-x-2 divide-slate-500'>
                    <img src='/src/assets/images/icons/instagram.png'/>
                    <img class='w-10' src='/src/assets/images/icons/x.png'/>
                    <img class='px-3' src='/src/assets/images/icons/facebook.png'/>
                    <img class='px-3' src='/src/assets/images/icons/Youtube.png'/>
                    
                </div>
            </div>
        </div>
    )
}

export default ContentDetail