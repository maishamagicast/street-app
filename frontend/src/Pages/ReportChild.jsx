import React from 'react'

function ReportChild() {
  return (
    <div>
      <form action="" className='reporting-child-form'>
        <input type="text" placeholder='Enter child Name' className='child-name-input'/>
        <input type="number" placeholder='Enter Age of Child' className='child-age-input' />
        <input type="text" placeholder='Enter name of Parent'className='parent-name-input' />
        <input type="number" placeholder="Enter parent's contact" className='parent-contact-input' />
        <input type="text" placeholder='Last place seen' className='last-seen-input'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default ReportChild