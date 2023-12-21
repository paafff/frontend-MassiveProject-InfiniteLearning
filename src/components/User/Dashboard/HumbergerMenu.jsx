import React from 'react'

const HumbergerMenu = ({ showSidebar, setShowSidebar }) => {
    return (
        <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className={`w-5 h-5  transition-all text-zinc-900 lg:hidden mb-10 rotate-90 ${showSidebar ? 'ml-80 rotate-180' : 'ml-0'} `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">

            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />

        </svg>
    )
}

export default HumbergerMenu