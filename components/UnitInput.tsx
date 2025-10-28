
import React from 'react';
import { Unit } from '../types';
import { UNITS_DATA } from '../constants';

interface UnitInputProps {
  label: string;
  value: string;
  onValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit: Unit;
  onUnitChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

const UnitInput: React.FC<UnitInputProps> = ({
  label,
  value,
  onValueChange,
  unit,
  onUnitChange,
  disabled = false,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm lg:text-base font-medium text-slate-700 dark:text-slate-300">{label}</label>
      <div className="flex rounded-md shadow-sm">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={onValueChange}
          disabled={disabled}
          className={`
            flex-1 block w-full px-4 py-3 lg:px-5 lg:py-4 rounded-l-md 
            bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white 
            border-slate-300 dark:border-slate-600 border focus:ring-indigo-500 focus:border-indigo-500
            transition duration-150 ease-in-out sm:text-base lg:text-lg
            ${disabled ? 'opacity-70 cursor-not-allowed' : ''}
          `}
          placeholder="0"
        />
        <select
          value={unit}
          onChange={onUnitChange}
          className="inline-flex items-center px-3 lg:px-4 rounded-r-md border border-l-0 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-200 text-sm lg:text-base font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
        >
          {Object.values(Unit).map((u) => (
            <option key={u} value={u}>
              {UNITS_DATA[u].name} ({UNITS_DATA[u].symbol})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UnitInput;
