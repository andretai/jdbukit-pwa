import React from 'react'

export default function Install(props) {
  const list_items = "my-3";
  const list_items_ans = "mb-3 text-justify text-sm";
  const list_items_img = "mb-6 border border-gray-300";
  return (
    <div>
      <button onClick={() => props.toggleShowInstall()} className="z-40 fixed inset-0 w-full h-full bg-black opacity-50">
      </button>
      <div className="z-50 absolute top-0 left-0 right-0 m-6 p-6 bg-white rounded-sm font-hairline">
        <p className="font-semibold text-center text-xl">How to Install?</p>
        <ol className="list-decimal mx-3">
          <li className={list_items}>
            <p className={list_items_ans}>Go to your browser's settings (usually at the top right corner).</p>
            <img className={list_items_img} src="/ss/s1.jpg" alt="Step 1, go to your browser settings which is usually at the top right corner."></img>
          </li>
          <li className={list_items}>
            <p className={list_items_ans}>In the settings dropdown list, find "Add to Home Screen" or its equivalent.</p>
            <img className={list_items_img} src="/ss/s2.jpg" alt="In the settings dropdown list, find 'Add to Home Screen' or its equivalent."></img>
          </li>
          <li className={list_items}>
            <p className={list_items_ans}>Finally, click "Add" in the pop up window to add to your Home screen.</p>
            <img className={list_items_img} src="/ss/s3.jpg" alt="Finally, click 'Add' in the pop up window to add to your Home screen."></img>
          </li>
        </ol>
        <div className="w-1/2 mx-auto mt-8">
          <button onClick={() => props.toggleShowInstall()} className="w-full bg-blue-500 rounded-lg text-white focus:outline-none">Okay</button>
        </div>
      </div>
    </div>
  )
}