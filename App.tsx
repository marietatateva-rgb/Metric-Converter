
import React, { useState, useEffect, useCallback } from 'react';
import { Unit } from './types';
import { UNITS_DATA } from './constants';
import UnitInput from './components/UnitInput';
import SwapButton from './components/SwapButton';

const App: React.FC = () => {
  const [fromValue, setFromValue] = useState<string>('1');
  const [toValue, setToValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<Unit>(Unit.Kilometer);
  const [toUnit, setToUnit] = useState<Unit>(Unit.Mile);

  const convert = useCallback(() => {
    const value = parseFloat(fromValue);
    if (isNaN(value) || !fromValue) {
      setToValue('');
      return;
    }

    const fromUnitData = UNITS_DATA[fromUnit];
    const toUnitData = UNITS_DATA[toUnit];

    if (!fromUnitData || !toUnitData) return;

    const valueInMeters = value * fromUnitData.toMeters;
    const result = valueInMeters / toUnitData.toMeters;

    // Format to a reasonable number of decimal places
    if (result < 0.001 && result !== 0) {
        setToValue(result.toExponential(4));
    } else {
        setToValue(Number(result.toFixed(4)).toString());
    }
  }, [fromValue, fromUnit, toUnit]);

  useEffect(() => {
    convert();
  }, [convert]);

  const handleSwapUnits = () => {
    const currentFromValue = fromValue;
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
    setToValue(currentFromValue);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl lg:max-w-4xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 space-y-8 lg:space-y-10">
        <header>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-800 dark:text-white">
            Metric Converter
          </h1>
          <p className="text-center text-slate-500 dark:text-slate-400 mt-2 lg:mt-4 lg:text-lg">
            Fast and easy length conversions.
          </p>
        </header>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="w-full">
            <UnitInput
              label="From"
              value={fromValue}
              onValueChange={(e) => setFromValue(e.target.value)}
              unit={fromUnit}
              onUnitChange={(e) => setFromUnit(e.target.value as Unit)}
            />
          </div>
          
          <div className="mt-4 md:mt-0 flex-shrink-0">
             <SwapButton onClick={handleSwapUnits} />
          </div>
          
          <div className="w-full">
            <UnitInput
              label="To"
              value={toValue}
              unit={toUnit}
              onUnitChange={(e) => setToUnit(e.target.value as Unit)}
              disabled={true}
            />
          </div>
        </div>

        <div className="text-center pt-6 lg:pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-lg lg:text-2xl font-medium text-indigo-600 dark:text-indigo-400 break-all">
                {fromValue || 0} {UNITS_DATA[fromUnit].name.toLowerCase()}(s) = {toValue || 0} {UNITS_DATA[toUnit].name.toLowerCase()}(s)
            </p>
        </div>
      </div>
    </main>
  );
};

export default App;
