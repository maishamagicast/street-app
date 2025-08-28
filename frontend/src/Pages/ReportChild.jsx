import React from 'react'

function ReportChild() {
  function handleChildReport () {
    alert("Child has been reported")
  }
  return (
    <div className='report-child-container'>
      <form action="" className='reporting-child-form'>
        <input type="text" placeholder='Enter child Name' className='report-child-name-input'/>
        <input type="number" placeholder='Enter Age of Child' className='report-child-age-input' />
        <input type="text" placeholder='Enter name of Parent'className='report-parent-name-input' />
        <input type="number" placeholder="Enter parent's contact" className='report-parent-contact-input' />
        <input type="text" placeholder='Last place seen' className='report-last-seen-input'/>
        <button className='report-child-button' onClick={handleChildReport} >submit</button>
      </form>
    </div>
  )
}

export default ReportChild