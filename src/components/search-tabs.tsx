"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const placeholderMap: Record<string, string> = {
  All: "Search Your Favorite Watches",
  Smartwatch: "Search Smartwatches",
  "Luxury watch": "Search Luxury Watches",
  "Diver’s watch": "Search Diver's Watches",
};

export default function SearchTabs() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="w-full max-w-xl mx-auto py-6 space-y-6">
      {/* Tabs */}
      <Tabs defaultValue="All" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="hidden md:grid  w-full grid-cols-4 bg-transparent gap-2">
          {Object.keys(placeholderMap).map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className=" text-sm font-bold text-white bg-transparent rounded-none border-0 data-[state=active]:shadow-none data-[state=active]:border-b-[2px] data-[state=active]:border-orange-500 data-[state=active]:w-fit data-[state=active]:px-4 mx-auto data-[state=active]:bg-transparent cursor-pointer"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Search Bar */}
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          size={20}
        />
        <Input
          placeholder={placeholderMap[activeTab]}
          className="pl-10 py-6 rounded-full shadow-md bg-white"
        />
      </div>
    </div>
  );
}
