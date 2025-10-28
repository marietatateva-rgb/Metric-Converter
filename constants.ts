
import { Unit, UnitData } from './types';

export const UNITS_DATA: Record<Unit, UnitData> = {
  [Unit.Kilometer]: { name: 'Kilometer', symbol: 'km', toMeters: 1000 },
  [Unit.Mile]: { name: 'Mile', symbol: 'mi', toMeters: 1609.34 },
  [Unit.Meter]: { name: 'Meter', symbol: 'm', toMeters: 1 },
  [Unit.Centimeter]: { name: 'Centimeter', symbol: 'cm', toMeters: 0.01 },
  [Unit.Millimeter]: { name: 'Millimeter', symbol: 'mm', toMeters: 0.001 },
  [Unit.Inch]: { name: 'Inch', symbol: 'in', toMeters: 0.0254 },
  [Unit.Foot]: { name: 'Foot', symbol: 'ft', toMeters: 0.3048 },
  [Unit.Yard]: { name: 'Yard', symbol: 'yd', toMeters: 0.9144 },
};
