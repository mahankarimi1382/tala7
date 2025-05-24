import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

function InstallmentTrack() {
  return (
    <div>
      <div className='w-[20%] p-4  border-gray-400 border-2 rounded-lg mr-7 mt-4'>
   <div className="flex gap-3 mr-3 my-6 items-center bakhsh">
   <IoSearchOutline size={32}/>
   <p>جستجو</p>
   </div>
   <div className="flex gap-3 mr-3 my-6 items-center bakhsh">
   <IoSettingsOutline  size={32}/>
   <p>تنظیمات</p>
      </div>
      </div>
    </div>
  )
}

export default InstallmentTrack