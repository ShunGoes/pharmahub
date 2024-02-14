/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import My_blog_post from "./My_blog_post";
import Notifications from "./Notifications";

type Props = {
  activeTab: string;
};

const styles = {
  control: (styles: Record<string, any>) => ({
    ...styles,
    borderColor: "#E6ECEE !important",
    border: `1px solid #E6ECEE`,
    boxShadow: "none",
    height: "3rem",
  }),
  indicatorsContainer: (styles: Record<string, any>) => ({
    ...styles,
    ...styles,
    display: "block",
    margin: "auto",
  }),
};

const RightSide = ({ activeTab }: Props) => {
  const allPosts = [
    {
      value: "All posts",
      label: "All posts",
    },
  ];

  const sortPosts = [
    {
      value: "Sort posts",
      label: "Sort posts",
    },
  ];

  return (
    <div className="bg-white border border-[#E5E5E5] h-full w-full rounded-lg py-6">
      <div className="border-b border-[#E5E5E5] px-8 pb-6">
        <h1 className="text-2xl text-[#0C2129] font-semibold font-mont">
          My Blog Posts
        </h1>
        <p className="text-[#6D7A7F] font-medium">Manage blog posts here.</p>
      </div>
      <div className="flex items-center gap-x-4 mt-5 px-8">
        <Select
          styles={styles}
          defaultValue={allPosts}
          options={allPosts}
          className="lg:min-w-[166px]"
        />
        <Select
          styles={styles}
          defaultValue={sortPosts}
          options={sortPosts}
          className="lg:min-w-[166px]"
        />
      </div>

      {activeTab === "My Dashboard" && (
        <div className="mt-8 px-8">
          <p className="text-2xl text-[#0C2129]">{activeTab}</p>
        </div>
      )}
      {activeTab === "My Blog Posts" && <My_blog_post />}
      {activeTab === "Notifications" && <Notifications />}
      {activeTab === "Settings" && (
        <div className="mt-8 px-8">
          <p className="text-2xl text-[#0C2129]">{activeTab}</p>
        </div>
      )}
      {activeTab === "Logout" && (
        <div className="mt-8 px-8">
          <p className="text-2xl text-[#0C2129]">{activeTab}</p>
        </div>
      )}
    </div>
  );
};

export default RightSide;
