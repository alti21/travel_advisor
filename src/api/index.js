import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': 'ad92631e58mshaecaa26aa014180p157fd3jsn54fdb8e9875a',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
    try {
        // destructure to get the data property of the response
        const { data: { data } } = await axios.get(URL, options);

        return data;
    } catch(error) {
        console.log(error);
    }
}