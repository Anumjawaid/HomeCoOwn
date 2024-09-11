import { getCountries } from "../Utils/API/CountryCity";

 const countryList=await getCountries()
 export const countries=countryList.map((v,i)=>{return {name:v.name,value:v.iso2}})