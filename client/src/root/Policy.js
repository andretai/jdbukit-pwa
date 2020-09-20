import React from 'react'

export default function Policy(props) {
  const list_items = "my-3";
  const list_items_ans = "italic text-sm";
  return (
    <div>
      <button onClick={() => props.toggleShowPolicy()} className="z-40 fixed inset-0 w-full h-full bg-black opacity-50">
      </button>
      <div className="z-50 fixed top-0 left-0 right-0 m-6 p-6 md:mx-32 lg:mx-64 xl:mx-96 bg-white rounded-sm font-hairline">
        <p className="font-semibold text-center text-xl">Privacy Policy</p>
        <ol className="list-decimal mx-3">
          <li className={list_items}>
            <p>Information that we collect.</p>
            <p className={list_items_ans}>Only names and email addresses, which will be used to notify you about added features or policy changes.</p>
          </li>
          <li className={list_items}>
            <p>Information you provide to us.</p>
            <p className={list_items_ans}>Name and email. We do not collect passwords as they are fully encrypted.</p>
          </li>
          <li className={list_items}>
            <p>How do we collect information?</p>
            <p className={list_items_ans}>We collect users' names and emails when the registers an account.</p>
          </li>
          <li className={list_items}>
            <p>Use of your personal information?</p>
            <p className={list_items_ans}>Only names and email addresses, which will be used to notify you about added features or policy changes.</p>
          </li>
        </ol>
        <div className="w-1/2 mx-auto mt-8">
          <button onClick={() => props.toggleShowPolicy()} className="w-full bg-blue-500 rounded-lg text-white focus:outline-none">Okay</button>
        </div>
      </div>
    </div>
  )
}