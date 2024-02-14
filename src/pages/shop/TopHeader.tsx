import { BiSearch } from "react-icons/bi";
import grid from "../../assets/icons/grid_view.svg";
import format from "../../assets/icons/format_list.svg";
import Select from "react-select";
import { MdOutlineSort } from "react-icons/md";
import { FiUploadCloud } from "react-icons/fi";

const TopHeader = () => {
  const options = [
    {
      value: "Default Sorting",
      label: (
        <div className="flex items-center gap-x-2">
          <MdOutlineSort className="text-2xl" />{" "}
          <p className="md:block hidden">Default Sorting</p>
        </div>
      ),
    },
  ];

  const styles = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: (styles: Record<string,any>) => ({
      ...styles,
      borderColor: "#E6ECEE !important",
      border: `1px solid #E6ECEE`,
      boxShadow: "none",
      height: "3rem",
    }),
  };

  return (
    <div className="flex lg:flex-row flex-col w-full items-center justify-between gap-x-8 gap-y-4">
      <div className="border border-[#E6ECEE] px-6 rounded-[10px] lg:w-1/3 w-full">
        <span className="relative h-14 ">
          <input
            type="text"
            placeholder="Search"
            className="bg-white  h-14 w-full pl-6 outline-none placeholder:text-[#A1A1A1]"
          />
          <BiSearch className="text-[#A1A1A1] absolute top-0 bottom-0" />
        </span>
      </div>
      <div className="flex items-center lg:justify-end justify-between lg:w-2/3 w-full lg:gap-x-8">
        <Select styles={styles} defaultValue={options} options={options} />
        <div className="flex gap-x-2 ">
          <button className="bg-[#0A4757] h-12 rounded-[10px] p-2 focus:outline-none">
            <img src={grid} alt="grid icon" className="w-[30px] h-full" />
          </button>
          <button className="border border-[#9DB5BB] h-12 rounded-[10px] p-2 focus:outline-none">
            <img src={format} alt="grid icon" className="w-[30px] h-full" />
          </button>
        </div>
        <div className="border border-[#0A4757] md:px-4 h-12 rounded-[10px]">
          <button className="text-[#0A4757] font-medium md:text-lg text-sm w-full h-full p-0 focus:outline-none">
            <FiUploadCloud className="text-2xl w-[30px] md:hidden block" />
            <p className="md:block hidden">Upload Drug</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
