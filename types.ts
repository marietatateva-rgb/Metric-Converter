
export enum Unit {
  Kilometer = 'km',
  Mile = 'mi',
  Meter = 'm',
  Centimeter = 'cm',
  Millimeter = 'mm',
  Inch = 'in',
  Foot = 'ft',
  Yard = 'yd',
}

export interface UnitData {
  name: string;
  symbol: string;
  toMeters: number;
}
