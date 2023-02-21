import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        // destructure to get the data property of the response
        const { data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'ad92631e58mshaecaa26aa014180p157fd3jsn54fdb8e9875a',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
    } catch(error) {
        console.log(error);
    }
}
