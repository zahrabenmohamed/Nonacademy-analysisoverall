import React from 'react';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';


const Progress =()=>{
    const examData = [
		{
			text: 'Total questions',
			result: 10,
		},
		{
			text: 'Total correct',
			result: 8,
		},
		{
			text: 'Total incorrect',
			result: 2,
		},
		{
			text: 'Not answered',
			result: 0,
		},
		{
			text: 'Total marks',
			result: 3,
		},
		{
			text: 'Difficulty',
			result: 'Beginner',
		},

		{
			text: 'Accuracy',
			result: 80,
		},
	];

    return (
		<>
				<ul className='flex mx-auto flex-wrap p-10 align-center justify-around'>
					{examData.map((exam, i) => {
						if (exam.text !== 'Accuracy') {
							return (
								<div className='w-1/3 m-1 rounded flex flex-col items-center '>
									<p className='text-black text-2xl subpixel-antialiased font-normal'>
										{exam.text}
									</p>
									<div>
										<p className='tracking-wide text-black text-8xl subpixel-antialiased font-light '>
											{exam.result}
										</p>
									</div>
								</div>
							);
						} else {
							return (
								<div className='w-1/3 m-1 rounded flex flex-col items-center'>
									<p className='text-black text-2xl subpixel-antialiased font-normal'>
										{exam.text}
									</p>
									<div>
										<CircularProgressBar
											colorCircle='#595959'
											colorSlice='#3B82F6'
											fontColor='#FFFFFF'
											fontWeight={0}
											percent={exam.result}
											round
											size={140}
										/>
									</div>
								</div>
							);
						}
					})}
				</ul>
		</>
	);
};
export default Progress