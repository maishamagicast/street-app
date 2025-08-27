import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function FAQS() {
  const [faqsList, setFaqsList] = useState()
  useEffect(() => {
    fetch("db.json")
    .then((response) => response.json())
    .then((data) =>setFaqsList(data))
  }, [])
  return (
    <>
    {faqsList.faqs.map((faq, index)=> {
  
        <li key={index}>{faq.question}</li>
      
    })}
    </>
  )
}

export default FAQS