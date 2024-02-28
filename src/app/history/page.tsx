import Navbar from "@/components/Navbar";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const page = () => {
  return (
    <main>
      <Navbar title="My History" input={false} username="Shreeraj Shinde" />
      <section>
        <HistoryCard diseaseName="Hypertension" />
        <HistoryCard diseaseName="Covid-19" />
        <HistoryCard diseaseName="Fever" />
        <HistoryCard diseaseName="Cold" />
      </section>
    </main>
  );
};

interface HistoryCardProps {
  diseaseName: string;
}

const HistoryCard = ({ diseaseName }: HistoryCardProps) => {
  return (
    <div className="p-6 flex gap-2 flex-col bg-white rounded-lg mb-2 lg:flex-row lg:justify-between">
      <div className="flex items-center justify-center">
        <h2 className="text-gray-500 font-semibold text-md">{diseaseName}</h2>
      </div>
      <div className="flex items-center justify-center">
        <Select>
          <SelectTrigger className="w-[180px] focus:outline-0">
            <SelectValue placeholder="Disease Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem className="text-green-500" value="apple">
                CURED
              </SelectItem>
              <SelectItem className="text-red-500" value="banana">
                NOT CURED
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default page;
