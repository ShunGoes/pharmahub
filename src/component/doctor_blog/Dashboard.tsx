import { MdOutlineStickyNote2 } from "react-icons/md";
import { PiHouse, PiGearSix } from "react-icons/pi";
import { GoBell, GoSignOut } from "react-icons/go";

type Props = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const tabsArray = [
  { id: 1, icon: <PiHouse className="text-2xl" />, title: "My Dashboard" },
  {
    id: 1,
    icon: <MdOutlineStickyNote2 className="text-2xl" />,
    title: "My Blog Posts",
  },
  { id: 1, icon: <GoBell className="text-2xl" />, title: "Notifications" },
  { id: 1, icon: <PiGearSix className="text-2xl" />, title: "Settings" },
  { id: 1, icon: <GoSignOut className="text-2xl" />, title: "Logout" },
];

export default function Dashboard({ activeTab, setActiveTab }: Props) {
  return (
    <div className="rounded-lg px-5 py-8 bg-white">
      <h1 className="text-lg text-[#0C2129] font-semibold font-mont pb-4">
        DASHBOARD
      </h1>

      <div className="grid w-full rounded-md">
        {tabsArray.map((tab) => {
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.title)}
              className={`${
                activeTab === tab.title
                  ? "text-[#226FE1] bg-[#226FE11A]"
                  : "text-[#6D7A7F]"
              } flex items-center gap-x-2 h-16 cursor-pointer border-t border-[#6D7A7F] px-6 py-3 font-medium`}
            >
              {tab.icon}
              {tab.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
