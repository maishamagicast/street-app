import React, { useEffect, useState } from 'react'

function FAQS() {
  const [faqsList, setFaqsList] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/faqs")
    .then((response) => response.json())
    .then((data) => (
      setFaqsList(data)
    ))
  }, [])
  function handleFaqs () {
   {faqsList.map((myfaq, index)=> (
     (
      <button>{myfaq.answer}</button>
    )
   ))}
  }
  return (
    <>
    <div>
      {
        faqsList.map((myFaq, index) => (
          <button key={index} id='faqs-button' onClick={handleFaqs}>{myFaq.question}</button>
        ))
      }
    </div>
    </>
  )
}

export default FAQS