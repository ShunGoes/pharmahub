import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import ReviewsTab from "./reviewsTab";

const Shoptab = () => {
  const [tabIndex, setTabIndex] = useState(0);
 
  const TabTitle = ["Description", "How To Use", `Reviews (0)`];


  return (
    <div className="bg-white">
      <div className="w-[90%] mx-auto py-16">
        <Tabs
          className="lg:mt-0 mt-10"
          selectedTabClassName="border-b border-[#0A4757] "
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="flex lg:mt-0 mt-12 bg-white h-12 items-center sm:justify-center justify-start z-40 mb-8 whitespace-pre overflow-auto gap-x-4">
            {TabTitle.map((title, key) => (
              <Tab
                key={key}
                className="text-lg cursor-pointer text-[#676767] w-[235px] flex items-center h-full justify-center border-0 focus-visible:outline-none"
              >
                {title}
              </Tab>
            ))}
          </TabList>
          <TabPanel>
            <div className="border border-[#E2E2E2] rounded-[10px] py-12 lg:pl-12 lg:pr-[253px] px-3">
              <span className="leading-7 text-lg text-black">
                <p>
                  Nature’s Way Alive! B-Complex Gummies, B-Vitamins, Mango
                  Flavored, 60 Gummies. Daily gummies to support cellular energy
                  with 8 B-vitamins.* Made with all 8 B-vitamins to help convert
                  food into fuel.* With food-based Orchard Fruits & Garden
                  Veggies powder blend (150 mg per serving). Delicious mango
                  flavored gummies are made with pectin, not gelatin.
                  Gluten-free and vegetarian. No soy, dairy, wheat, peanuts,
                  eggs, or yeast-derived ingredients.
                </p>
                <p className="mt-4">
                  . Daily gummies to support cellular energy with 8 B-vitamins.*
                  <br />
                  . Made with all 8 B-vitamins to help convert food into fuel.*
                  <br />
                  . With food-based Orchard Fruits™ & Garden Veggies™ powder
                  blend (150 mg per serving).
                  <br />
                  . Delicious mango flavored gummies are made with pectin, not
                  gelatin.
                  <br />. Gluten-free and vegetarian. No soy, dairy, wheat,
                  peanuts, eggs, or yeast-derived ingredients.
                </p>
              </span>
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel>
            <ReviewsTab />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shoptab;
