import React from 'react'

const PacketSubscription = () => {
  return (
    <div>
      <button type='button' class='ml-20 inline-flex'>
        <img class='mt-1 mr-3 w-2' src='/src/assets/images/icons/Arrow.png'/>
        Back
      </button>
      <div align='center'>
        <div class="max-w-lg rounded rounded-xl overflow-hidden shadow-lg m-4 border-radius-10" align='left'>
          <img class="w-full" src="/src/assets/images/salon.jpg" alt="salon" />
          <div class="px-6 py-4">
            <h1 class='text-xs font-semibold m-2'>Paket Basic</h1>
            <h1 class='text-2xl font-bold m-2'>Rp 120.000,00</h1>
            <p class='m-2 text-gray-500 text-sm'>Hal-hal penting untuk memberikan karya terbaik Anda pada klien.</p>
            <ul class='m-5 list-image-[url(/src/assets/images/icons/Check.png)] text-gray-500 text-sm'>
              <li class='mt-2'>Penampilan profile bisnis dasar</li>
              <li class='mt-2'>Bagikan 10 foto hasil potongan rambut</li>
              <li class='mt-2'>Informasi jam operasional bisnis</li>
              <li class='mt-2'>Kontak langsung melalui tombol kontak</li>
              <li class='mt-2'>Waktu respon dukungan 24 jam</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PacketSubscription