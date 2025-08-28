import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function FAQS() {
  const [faqsList, setFaqsList] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/faqs")
    .then((response) => response.json())
    .then((data) =>setFaqsList(data))
  }, [])
  return (
    <>
    {faqsList.map((faq, index)=> (
      <div key={index} className='faqs-question-card' >{faq.question}</div>
    ))}
    </>
  )
}

export default FAQS