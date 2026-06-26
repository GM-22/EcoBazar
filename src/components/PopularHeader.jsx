import { ArrowRightIcon } from 'lucide-react'


const PopularHeader = ({title, viewAll}) => {
  return (
    <div className='flex justify-between items-center mb-8'>
      <h2 className="text-[32px] font-semibold leading-[120%] ">{title}</h2>
      
    <button className="text-greens font-semibold flex gap-1 items-center text-sm">
        <span> {viewAll }</span> <ArrowRightIcon />
    </button>
      
    </div>
  )
}

export default PopularHeader