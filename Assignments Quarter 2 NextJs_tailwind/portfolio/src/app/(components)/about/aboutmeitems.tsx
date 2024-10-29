"use client";
import { useState, useEffect } from "react";
interface ItemType {
  id: number;
  title: string;
  details: string[];
}
const items: ItemType[] = [
  {
    id: 1,
    title: "Skills",
    details: ["Node.js", "JavaScript", "HTML", "Next.js", "Redux", "tailwind"],
  },
  {
    id: 2,
    title: "Education",
    details: [
      "Fullstack Academy of Code",
      "University of California, Santa Cruz",
    ],
  },
  {
    id: 3,
    title: "Certificate",
    details: ["AWS Cloud Practitioner", "Google Professional Cloud Developer"],
  },
];

export default function Aboutmeitems() {
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  const handleItemClick = (item: ItemType) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    // Set the initial selected item to the "Skills" item
    setSelectedItem(items[0]);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className={`cursor-pointer p-2 hover:text-white ${
              selectedItem && selectedItem.id === item.id
                ? "text-white border-purple-500 border-b-4 ease-out duration-500"
                : "text-gray-400 "
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      {selectedItem && (
        <div className="mt-4">
          <ul className="list-disc list-inside">
            {selectedItem.details.map((detail, index) => (
              <li key={index} className="mr-3 hover:text-white">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
