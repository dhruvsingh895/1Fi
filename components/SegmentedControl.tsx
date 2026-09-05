type SegmentedControlProps = {
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

export function SegmentedControl({ value, options, onChange }: SegmentedControlProps) {
  return (
    <div className="flex rounded-full bg-gray-100 p-1">
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={`min-h-10 flex-1 rounded-full px-2 py-2 text-[11px] font-medium leading-tight transition ${
              isActive ? "bg-white text-primary shadow-sm" : "text-text-secondary"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
