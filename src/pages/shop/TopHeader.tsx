import { BiSearch } from "react-icons/bi";
import grid from '../../assets/icons/grid_view.svg';
import format from '../../assets/icons/format_list.svg';

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between gap-x-8">
      <div className="border border-[#E6ECEE] px-6 rounded-[10px] w-1/3">
      <span className="relative h-14 ">
        <input type="text" placeholder="Search" className="bg-white  h-14 w-full pl-6 outline-none placeholder:text-[#A1A1A1]" />
        <BiSearch className='text-[#A1A1A1] absolute top-0 bottom-0' />

      </span></div>
<div className="flex items-center justify-end w-2/3 gap-x-8">
      <div className="border border-[#E6ECEE] px-6 rounded-[10px]">
      <div className="relative h-14 ">
        <select id="" placeholder="Default Sorting" className="h-full w-full bg-white outline-none">
          
<option value="">Default Sorting</option>
        </select></div>
      </div>
      <div className="flex gap-x-2 ">
        <button className="bg-[#0A4757] rounded-[10px] p-1 focus:outline-none">
          <img src={grid} alt="grid icon" className="w-[30px] h-[30px]" />
        </button>
        <button className="border border-[#9DB5BB] rounded-[10px] p-1 focus:outline-none">
          <img src={format} alt="grid icon" className="w-[30px] h-[30px]" />
        </button>
      </div>
      <div className="border border-[#0A4757] px-4 h-14 rounded-[10px]">
        <button className="text-[#0A4757] font-medium text-lg w-full focus:outline-none">Upload Drug</button>
      </div>
      </div>
    </div>
  )
}

export default TopHeader