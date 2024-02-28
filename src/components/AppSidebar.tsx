"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { BsBarChartFill, BsPieChartFill } from "react-icons/bs";
import { FaHistory, FaUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";
import { RiDashboard2Fill, RiLineChartFill } from "react-icons/ri";

const AppSidebar = () => {
  const pathname = usePathname();
  return (
    <>
      {window.innerWidth <= 1100 ? (
        <button className="absolute">Expand</button>
      ) : (
        <aside className="bg-blue-500 text-white rounded-xl overflow-auto">
          <h1 className="uppercase tracking-wider font-bold text-xl pl-10 pt-12">
            Medcure
          </h1>
          <section className="flex flex-col gap-1 p-2 mt-10">
            <DivOne pathName={pathname} />
            <DivTwo pathName={pathname} />
          </section>
        </aside>
      )}
    </>
  );
};

interface LiProps {
  url: string;
  name: string;
  Icon: IconType;
  pathName: string;
}
const Li = ({ url, name, Icon, pathName }: LiProps) => {
  return (
    <li
      className={`list-none w-full rounded-sm mb-1 tracking-wide  ${
        pathName.includes(url) ? `bg-blue-600` : `bg-blue-500 hover:bg-blue-600`
      }`}
    >
      <Link
        href={url}
        className="flex items-center content-center gap-2 pl-6 p-2 text-sm font-medium"
      >
        <Icon /> {name}
      </Link>
    </li>
  );
};

const DivOne = ({ pathName }: { pathName: string }) => {
  return (
    <>
      <h2 className="font-base uppercase tracking-widest text-xs pl-8 mb-2">
        Health & Diagnostics
      </h2>
      <ul className="mb-4">
        <Li
          url="/dashboard"
          name={"Dashboard"}
          Icon={RiDashboard2Fill}
          pathName={pathName}
        />
        <Li
          url="/about_me"
          name={"About Me"}
          Icon={FaUser}
          pathName={pathName}
        />
        <Li
          url="/history"
          name={"History"}
          Icon={FaHistory}
          pathName={pathName}
        />
        <Li
          url="/chat"
          name={"Diagnose"}
          Icon={FaUserDoctor}
          pathName={pathName}
        />
        <Li
          url="/workout"
          name={"Workouts"}
          Icon={GiMuscleUp}
          pathName={pathName}
        />
      </ul>
    </>
  );
};

const DivTwo = ({ pathName }: { pathName: string }) => {
  return (
    <>
      <h2 className="font-base uppercase tracking-widest text-xs pl-8 mb-2">
        Health Charts
      </h2>
      <ul>
        <Li
          url="/chart/line"
          name={"Pie"}
          Icon={BsPieChartFill}
          pathName={pathName}
        />
        <Li
          url="/chat"
          name={"Bar"}
          Icon={BsBarChartFill}
          pathName={pathName}
        />
        <Li
          url="/workout"
          name={"Line"}
          Icon={RiLineChartFill}
          pathName={pathName}
        />
      </ul>
    </>
  );
};

export default AppSidebar;
