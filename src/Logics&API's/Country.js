import { getCountries } from "../Utils/API/CountryCity";

 const countryList=await getCountries()
 export const countries=countryList.map((v,i)=>{return {name:v.name,value:v.iso2}}) 

 export const makeOptions=(arr)=>{
   let values=arr.map((v,i)=>{
         return {name:v,value:v}
     })
     return values
 }