import React, { useState } from 'react'

function ReportChild() {
  const [childName, setChildName] = useState('')
  const [childAge, setChildAge] = useState('')
  const [parentName, setParentName] = useState('')
  const [parentContact, setParentContact] = useState('')
  const [lastSeen, setLastSeen] = useState('')
  function handleFormSubmit(e) {
    e.preventDefault()

    const reportedChild = {
      childName,
      childAge,
      parentName,
      parentContact,
      lastSeen
    }
    fetch("http://localhost:3000/reportedChildren", {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(reportedChild)
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  return (
    <div className='report-child-container' onSubmit={handleFormSubmit}>
      <form action="" className='reporting-child-form'>
        <input type="text" 
        placeholder='Enter child Name' 
        className='report-child-name-input'
        value={childName}
        onChange={(event) => setChildName(event.target.value)}

        />
        <input type="number"
        placeholder='Enter Age of Child' 
        className='report-child-age-input' 
        value={childAge}
        onChange={(event) => setChildAge(event.target.value)}
        />
        <input type="text" 
        placeholder='Enter name of Parent'
        className='report-parent-name-input' 
        value={parentName}
        onChange={(event)=> setParentName(event.target.value)}
        />
        <input type="number" 
        placeholder="Enter parent's contact" 
        className='report-parent-contact-input' 
        value={parentContact}
        onChange={(event)=> setParentContact(event.target.value)}
        />
        <input type="text" 
        placeholder='Last place seen' 
        className='report-last-seen-input'
        value={lastSeen}
        onChange={(event)=> setLastSeen(event.target.value)}
        />
        <button className='report-child-button' >submit</button>
      </form>
    </div>
  )
}

export default ReportChild