import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function FAQS() {
  const [faqsList, setFaqsList] = useState()
  useEffect(() => {
    fetch("db.json")
    .then((response) => response.json())
    .then(setFaqsList(data))
  }, [])
  return (
    <>
    {faqsList.faqs.map((question)=> {
      return(
        <li>{question}</li>
      ) 
    })}
    </>
  )
}

export default FAQS