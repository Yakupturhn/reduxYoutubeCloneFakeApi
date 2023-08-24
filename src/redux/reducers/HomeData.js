const homeReducer = (state = { getVideos: [], isLoading: false }, action) => {
  switch (action.type) {
    case "GET_VIDEOS_START":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_VIDEOS_SUCCESS":
      return {
        ...state,
        getVideos: action.payload,
        isLoading: false, // Yükleme tamamlandı
      };

    default:
      return state;
  }
};
export default homeReducer;
