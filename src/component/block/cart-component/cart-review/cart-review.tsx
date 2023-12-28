import './cart-review.css'

import Review_Img_1 from '../../../../assets/cart-assets/review-1.svg'
import Crank_Bed from '../../../../assets/cart-assets/crank-bed.svg'

const CartReview = () => {
  return (
    <div className="h-[31rem] pl-5 lg:pl-0 mt-[3rem] w-full">
        <h3 className="text-[#0A4757] text-[18px] font-[700] ">Recently Viewed</h3>
        <div className="h-[382px] w-full mt-[2rem] overflow-x-auto cart flex flex-nowrap gap-9">
            <div className="h-full grid grid-rows-2 w-[285px] shrink-0 rounded-[10px]  ">
                <div className="row-span-1  flex justify-center items-center">
                    <img src={Review_Img_1} alt="cart image" width='141' height='85.09' />
                </div>
                <div className="row-span-1  w-full flex flex-col justify-center whitespace-nowrap overflow-hidden  items-center gap-1 text-center">
                    <p className='text-[#818181] text-[10px] font-[600]'>MEDICAL & HOSPITAL EQUIPMENTS</p>
                    <h3 className='text-[#0C2129] text-[15px] font-[600] w-10/12 truncate ...   '> STANDARD Q Malaria P.f/P.v Ag strip ( a pack of 25 test) </h3>
                    <div className='flex justify-between  w-10/12  whitespace-nowrap overflow-hidden'>
                        <div className='w-6/12 '></div>
                        <p className='text-[#818181] text-[12px] truncate ...  font-[600] w-6/12'> MOPHETH PHARMACY</p>
                    </div>
                    <h3 className='text-[#0A4757] text-[18px] font-[600]'>₦16,000.00</h3>
                    <button className='py-[10px] px-[18px] flex justify-center items-center w-[137px]'> Sold out </button>
                </div>
            </div>
            <div className="h-full grid grid-rows-2 w-[285px] shrink-0 rounded-[10px]  ">
                <div className="row-span-1  flex justify-center items-center">
                    <img src={Crank_Bed} alt="cart image" width='141' height='85.09' />
                </div>
                <div className="row-span-1  w-full flex flex-col justify-center whitespace-nowrap overflow-hidden  items-center gap-1 text-center">
                    <p className='text-[#818181] text-[10px] font-[600]'>MEDICAL & HOSPITAL EQUIPMENTS</p>
                    <h3 className='text-[#0C2129] text-[15px] font-[600] w-10/12 truncate ...   '> 
                    1 crank hospiatal bed
                     </h3>
                    <div className='flex justify-between  w-10/12  whitespace-nowrap overflow-hidden'>
                        <div className='w-6/12 '></div>
                        <p className='text-[#818181] text-[12px] truncate ...  font-[600] w-6/12'> DrugStore  PHARMACY</p>
                    </div>
                    <h3 className='text-[#0A4757] text-[18px] font-[600]'>₦185,000.00</h3>
                    <button className='py-[10px] px-[18px] flex justify-center items-center w-[137px]'> Sold out </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CartReview