import female_doctor from "../../assets/images/female-doctor.png";
import Dashboard from "./Dashboard";

type Props = {
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const Sidebar = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div>
      <div className="w-[306px] flex flex-col gap-y-8">
        <div>
        <div className="h-32 w-full bg-[#226FE1] rounded-t-lg relative flex justify-center">
          <div className="border-4 border-white rounded-full w-32 h-32 absolute top-8">
            <img
              src={female_doctor}
              alt=""
              className="rounded-full w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="h-52 w-full rounded-b-lg bg-white flex flex-col items-center justify-around py-8">
          <p className="text-[#0C2129] text-xl font-mont font-semibold">
            Fashola Adeyemi
          </p>
          <p className="text-[#6D7A7F] text-sm font-medium">Doctor</p>
          <button className="bg-[#0A4757] text-white py-2 px-5 rounded-lg text-sm font-bold focus:outline-none">
            Create New Post
          </button>
        </div>
        </div>

        <div>
          <Dashboard activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
