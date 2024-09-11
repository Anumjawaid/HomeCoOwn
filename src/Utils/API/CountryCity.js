
import axios from 'axios';

export const cityStateApitoken = "anVUTGFPOFYyYkRGMHhUZ0dLenp1aGU4SWsyRFdEV0Q3blA3dmN4aQ=="
export const ListOfCountriesEndpoint = "https://api.countrystatecity.in/v1/countries";
export const listofStatesEndpoint = "https://api.countrystatecity.in/v1/countries/SA/states";

export const getStates = async (state) => {
    try {
        
        var response = await axios.post(url, {
            city:state
        });
        return response.data
    }
    catch (err) {
        throw err;
    }
}

export const getCountries = async () => {
    try {
        var response = await axios.get(ListOfCountriesEndpoint, {
            headers: {
                "X-CSCAPI-KEY": cityStateApitoken
            }
        });
        return response.data
    }
    catch (err) {
        throw err;
    }
}