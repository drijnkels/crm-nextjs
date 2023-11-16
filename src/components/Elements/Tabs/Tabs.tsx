"use client"

import { useState } from  "react";

type TabsProps = {
  tabLabels: Array<string>;
  tabPages: Array<React.JSX.Element>
}

export default function Tabs ({ tabLabels, tabPages }: TabsProps){
  // Set the currentTab
  const [tabIndex, setTabIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState(tabPages[0]);

  const empty_element = <div>This tab contains no data</div>;

  const setTab = (tab: number) => {
    setTabIndex(tab);
    setCurrentTab(tabPages[tab] ? tabPages[tab] : empty_element);
  }

  return (
    <div>
      <div className="flex flex-row">
        {
          tabLabels.map((label, index) => {
            return <div key={index} onClick={() => setTab(index)} className={"flex-1 text-center py-2 cursor-pointer hover:bg-zinc-300" + (tabIndex == index ? ' bg-blue-100 text-blue-800' : '')}>{label}</div>
          })
        }
      </div>
      <div className="p-4">
        <div>
          {currentTab}
        </div>
      </div>
    </div>
  )
}