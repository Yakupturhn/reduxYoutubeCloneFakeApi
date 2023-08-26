const detailReducer = (state = { getVideo: [], isLoading: false }, action) => {
  switch (action.type) {
    case "GET_VIDEOS_START":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_VIDEOS_SUCCESS":
      return {
        ...state,
        getVideo: action.payload,
        isLoading: false, // Yükleme tamamlandı
      };

    default:
      return state;
  }
};
export default detailReducer;
