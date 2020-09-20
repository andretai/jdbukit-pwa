import React from 'react'

export default function Foot(props) {
  // CSS
  const button = "w-1/2 py-1"
  return (
    <div>
      <nav className="px-6 py-3 md:px-32 lg:px-64 xl:px-96 bg-gray-900 text-white text-xs">
        <div className="pb-3">
          <p className="pb-3 uppercase font-bold leading-tight text-xl">jdb</p>
          <div className="flex w-full py-3">
            <button className={button + ' bg-green-500'} onClick={() => props.toggleShowPolicy()}>Privacy Policy</button>
            <button className={button + ' bg-blue-500'} onClick={() => props.toggleShowInstall()}>How to Install</button>
          </div>
        </div>
        <p className="text-center">If there's any issue please contact <a className="text-indigo-300" href="https://www.instagram.com/andretaiwx/" target="_blank" rel="noopener noreferrer">me</a>.</p>
      </nav>
    </div>
  )
}