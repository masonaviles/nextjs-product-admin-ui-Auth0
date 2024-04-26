"use client";

import Link from "next/link";

const SettingsSidebar = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-7">
        <div className="">
          <ul>
            <li className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400">
              <Link href="/settings">Account Settings</Link>
            </li>
            <li className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400">
              <Link href="/settings/billing">Billing Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;

