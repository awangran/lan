import { useState } from "react";

interface SelectableFieldProps {
  question: string;
  fields: string[];
  onUpdate: (selected: string) => void;
}

const SelectableField: React.FC<SelectableFieldProps> = ({ question, fields, onUpdate }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleSelection = (option: string) => {
    let updatedSelection: string[];

    if (selectedOptions.includes(option)) {
      // Remove if already selected
      updatedSelection = selectedOptions.filter((item) => item !== option);
    } else {
      // Add if not selected
      updatedSelection = [...selectedOptions, option];
    }

    setSelectedOptions(updatedSelection);
    onUpdate(updatedSelection.join(", ")); // Send updated string to parent
  };

  return (

    <div className='w-full flex flex-col justify-center align-center items-center mt-10 p-10 md:mt-30'>
      <h2 className='text-3xl text-semibold text-[#191919] text-center mb-10'>{question}</h2>

      <div className="flex flex-wrap gap-2">
        {fields.map((field) => (
          <button
          key={field}
          onClick={() => toggleSelection(field)}
          className={`px-4 py-2 rounded-lg transition-all border border-black text-black ${
            selectedOptions.includes(field)
              ? "bg-[#191919] text-white"
              : "bg-white hover:bg-[#D9D9D9]"
          }`}
        >
          {field}
        </button>
        
        ))}
      </div>
    </div>
  );
};

export default SelectableField;
