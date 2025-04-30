
import jobs from '../data.json'
import CardJob from './components/CardJob'
import { useContext } from 'react'
import { JobContext } from './context/JobContext'
import { FaTimes } from 'react-icons/fa';

const App = () => {

  const { requisitos, clearRequisito, clearAllRequisitos } = useContext(JobContext)

  const filterJobs = jobs.filter(j =>
    requisitos.every(r =>
      j.role === r ||
      j.level === r ||
      j.languages?.includes(r) ||
      j.tools?.includes(r)
    )
  );

  return (
    <div style={{ backgroundColor: 'hsl(180, 52%, 96%)' }} className="min-h-screen overflow-auto">
      <header className='relative'>
        <img className="w-full hidden sm:block" style={{ backgroundColor: 'hsl(180, 29%, 50%)' }}
          src="/bg-header-desktop.svg" alt="Fondo escritorio" />
        <img className="w-full block sm:hidden" style={{ backgroundColor: 'hsl(180, 29%, 50%)', height: '100px' }}
          src="/bg-header-mobile.svg" alt="Fondo móvil" />
        {
          requisitos.length > 0 && (
            <div className='w-11/12 md:w-4/5 mx-auto mt-[-30px] mb-6 p-4 gap-2 flex flex-wrap justify-between items-center shadow-md rounded-md bg-white z-10 relative'>
              <div className='flex flex-wrap justify-center items-center gap-2 w-4/5'>
                {
                  requisitos.map(r => (
                    <div className="flex flex-row items-center h-8">
                      <p className="py-0.5 px-2 font-bold text-[14px] rounded-l-lg h-full flex items-center"
                        style={{ color: 'hsl(180, 29%, 50%)', backgroundColor: 'hsl(180, 52%, 96%)' }}>
                        {r}
                      </p>
                      <div className="h-full rounded-r-md aspect-square bg-[hsl(180,29%,50%)] hover:bg-black cursor-pointer flex items-center justify-center"
                        onClick={() => clearRequisito(r)}>
                        <FaTimes className="text-white w-4 h-5" />
                      </div>
                    </div>
                  ))}
              </div>
              <p className='text-gray-700 hover:text-cyan-700 hover:underline hover:cursor-pointer font-bold '
               onClick={() => clearAllRequisitos()}
               >
                Clear</p>
            </div>
          )
        }
      </header>
      <div className='flex flex-col justify-center items-center w-full my-15 gap-14 sm:gap-3'>
        {
          requisitos.length > 0 ? (
            <>
              {
                filterJobs.map((j, i) => (
                  <CardJob key={i} jobPosting={j} />
                ))
              }
            </>
          ) : (
            <>
              {
                jobs.map((j, i) => (
                  <CardJob key={i} jobPosting={j} />
                ))
              }
            </>
          )
        }
      </div>
    </div>
  )
}

export default App