// Reusable Component
const CustomInputField = ({ label="", name="", value="", type = "text", onChange=() => {}, placeholder = "" }) => {
  return (
    <div className="relative">
      <div className="bg-white border-2 overflow-hidden h-full border-gray-300 rounded-2xl   focus-within:border-gray-400 transition-colors">
        <div className="flex items-center">
          <label className="text-[12px] bg-[#F4F5FB] py-4 px-4 font-medium text-gray-800 min-w-fit">
            {label}
          </label>
          <input
            type={type}
            name={name}
            defaultValue={value}
            onChange={onChange}
            className="flex-1 text-[12px] ml-2 text-gray-600 bg-transparent border-none outline-none focus:ring-0"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomInputField;