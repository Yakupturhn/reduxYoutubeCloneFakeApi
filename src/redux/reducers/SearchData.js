const searchReducer = (
  state = { searchVideos: [], isLoading: false },
  action
) => {
  switch (action.type) {
    case "GET_VIDEOS_START":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_VIDEOS_SUCCESS":
      return {
        ...state,
        searchVideos: action.payload,
        isLoading: false, // Yükleme tamamlandı
      };

    default:
      return state;
  }
};
export default searchReducer;
