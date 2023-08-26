// redux/actions/HomeData.js
import axios from "axios";

const searchAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: "GET_VIDEOS_START" }); // Yükleme başladı
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/search",
      params: {
        q: data,
        part: "snippet,id",
        regionCode: "US",
        maxResults: "50",
        order: "date",
      },
      headers: {
        "X-RapidAPI-Key": "ffebe40167msh9667e2e5aba1ffcp12b028jsndd9c8567c9e8",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      dispatch({ type: "GET_VIDEOS_SUCCESS", payload: response.data });
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.log(error);
  }
};

export default searchAction;
