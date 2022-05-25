import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


const Card=()=>{
    return (
        <div className='flex'>
        
        <div class="p-6 justify-between max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hi Zahra !</h1>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">welcome to see the overall analysis for your exam </p>
        <h3 className='font-bold'>Rank : 200</h3>
        <h3 className='font-bold'>level: beginner</h3>
       
    </div>  

    <div class="p-6 justify-between max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
 <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;
      
       
    </div> 
    
<div >


</div>
    </div>



    )
}
export default Card