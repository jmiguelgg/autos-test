import {MakeI} from '../interfaces/MakeI';
import {Manufacturer} from '../interfaces/Manufacturer';
import {ModelI} from '../interfaces/ModelI';

const BaseDomain = 'https://vpic.nhtsa.dot.gov/api';
const ApiSegment = 'vehicles';

export const getMfr = async (): Promise<Manufacturer[]> => {
  const result = await fetch(
    `${BaseDomain}/${ApiSegment}/GetAllManufacturers?format=json`,
  );
  const {Results} = await result.json();
  return Results as Manufacturer[];
};

export const getMakeByMfrAndYear = async (
  idsMfr: number[],
  year: number,
): Promise<MakeI[]> => {
  const makes: MakeI[] = [];
  await Promise.all(
    idsMfr.map(async idMfr => {
      const result = await fetch(
        `${BaseDomain}/${ApiSegment}/GetMakesForManufacturerAndYear/${idMfr}?year=${year}&format=json`,
      );
      const {Results} = await result.json();
      makes.push(...Results);
    }),
  );
  return makes;
};

export const getModelByMakeAndYear = async (
  make: MakeI,
  year: number,
): Promise<ModelI[]> => {
  const result = await fetch(
    `${BaseDomain}/${ApiSegment}/GetModelsForMakeIdYear/makeId/${make.MakeId}/modelyear/${year}?format=json`,
  );
  const {Results} = await result.json();
  return Results as ModelI[];
};
