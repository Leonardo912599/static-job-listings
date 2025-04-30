import { useContext } from 'react'
import { JobContext } from '../context/JobContext'
import { JobPosting } from '../interfaces/JobPosting'

type Props = {
    jobPosting: JobPosting
}

const CardJob = ({ jobPosting }: Props) => {

    const { addRequisito } = useContext(JobContext)

    return (
        <div className="relative flex flex-col sm:flex-row justify-start items-center bg-white gap-2 sm:gap-12 w-4/5 rounded-md shadow-lg py-8 px-5 sm:p-5"
            style={jobPosting.new && jobPosting.featured ? {
                borderLeft: '5px solid hsl(180, 29%, 50%)'
            } : {}}
        >
            <img
                src={jobPosting.logo}
                className='absolute -top-6 left-5 w-12 h-12 sm:static sm:w-auto sm:h-auto sm:top-0 sm:left-0'
            />

            <div className='flex flex-col sm:flex-row justify-between w-full items-center'>
                <div className='flex flex-col justify-center items-start gap-2 w-full sm:w-auto'>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <p className='font-bold' style={{ color: 'hsl(180, 29%, 50%)' }}>{jobPosting.company}</p>
                        {(jobPosting.new || jobPosting.featured) && (
                            <div className='flex flex-row gap-2'>
                                {jobPosting.new && (
                                    <p className='p-1 text-sm rounded-md text-white' style={{ backgroundColor: 'hsl(180, 29%, 50%)' }}>NEW!</p>
                                )}
                                {jobPosting.featured && (
                                    <p className='p-1 text-sm rounded-md text-white' style={{ backgroundColor: 'hsl(180, 14%, 20%)' }}>FEATURED</p>
                                )}
                            </div>
                        )}
                    </div>
                    <p className='font-bold'>{jobPosting.position}</p>
                    <div className='flex flex-row gap-2 text-gray-400 text-sm'>
                        <p>{jobPosting.postedAt}</p>
                        <p>• {jobPosting.contract}</p>
                        <p>• {jobPosting.location}</p>
                    </div>
                </div>


                <div className='flex flex-wrap justify-start sm:justify-center gap-2 mt-4 sm:mt-0'>
                    {[...jobPosting.languages, ...jobPosting.tools, jobPosting.role, jobPosting.level].map((item, index) => (
                        <p
                            key={index}
                            onClick={() => addRequisito(item)}
                            className='p-2 font-bold text-sm rounded cursor-pointer hover:bg-cyan-700 hover:text-white transition'
                            style={{
                                color: 'hsl(180, 29%, 50%)',
                                backgroundColor: 'hsl(180, 52%, 96%)'
                            }}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default CardJob