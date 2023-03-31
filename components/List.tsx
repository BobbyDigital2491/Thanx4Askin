import React from 'react'

const List = () => {
  return (
    <div>
<h2 className="mb-2 text-center text-3xl font-bold text-yellow-400 dark:text-yellow-400">Hours, Fees, and Payment:</h2>
<ul className="  space-y-1 text-white dark:text-white">
    <li className='text-center'>
    We accept all major insurance companies to include the following: Cigna,
    Aetna, UHS, Optium, TriCare, Medicaid-fee-for-service, Absolute Total
    Care-Medicaid, Molina, Healthy Blue, Select Health-Medicaid, BlueCross
    Blue Shield, and BlueCross Blue Shield-PEBA and Federal plans.
    
    </li>
    <li className='text-center'>
    ✅ We accept cash, debit, major credit cards, cashiers checks, and money
    orders. We do not accept personal checks.
    </li>
    <li className='text-center'>
    🚫We do not accept personal checks.
    </li>
    <li className='text-center'>
    ✅ We do offer a sliding scale fee schedule based upon your individual
    household income.
    </li>
    <li className='text-center'>
    ✅ We can offer a superbill to your insurance company as an out-of-network
    provider.
    </li>
    
</ul>
<br/>
<h2 className="mb-2 text-center text-3xl font-bold text-yellow-400 dark:text-yellow-400">Office Hours</h2>
<ul className="  space-y-1 text-white dark:text-white">
<li className='text-center'>
    Monday - Friday 9:00 am - 6:00 pm
    </li >
    <li className='text-center'>
    Saturday 9:00 am - 3:00 pm
    </li>
</ul>
<br/>
<h2 className="mb-2 text-center text-3xl font-bold text-yellow-400 dark:text-yellow-400">Cancellation Policy</h2>
<ul className="  space-y-1 text-white dark:text-white">
    <li className='text-center'>
    - Our office requests a 24-hour notice of an appointment cancellation/reschedule.
    </li>
    <li className='text-center'>
    - If a cancellation or rescheduling occurs in less than 24-hours of appointment <br/>will automatically
charge the full session rate to your debit/credit card on file.  
    </li>
    <li className=' text-center'>
    - This fee applies to being more than 15 minutes late for the appointment and no-shows.
    </li>
    <li className='text-center'>
    - This fee should be paid before scheduling the next appointment with the assigned therapist.
    </li>
</ul>


    </div>
  )
}

export default List
