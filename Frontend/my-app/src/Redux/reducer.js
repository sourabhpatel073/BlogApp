let initState = {
  data: [],
  loading: false,
};
export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case "fethingDataReq":
      return { ...state, loading: true };
    case "fethingDataSuccess":
      return { ...state, data: payload, loading: false };
    case "fethingDataFail":
      return { ...state, loading: false };
    default:
      return state;
  }
}
