"use client";

import Link from "next/link";

const SettingsSidebar = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="p-7">
        <div className="">
          <ul>
            <li>
              <Link href="/settings">Account Settings</Link>
            </li>
            <li>
              <Link href="/settings/billing">Billing Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;

