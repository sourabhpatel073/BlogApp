import axios from "axios";
let url = "http://127.0.0.1:8080"

export const getBlogs = (query) => (dispatch) => {
  dispatch({ type: "fethingDataReq"});
  axios
    .get(`${url}/getall?q=${query}`)
    .then((res) => {
      dispatch({ type: "fethingDataSuccess", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "fethingDataFail" });
    });
};


export const addProduct=(userData)=>(dispatch)=>{
    
    dispatch({ type: "fethingDataReq" });
    axios.post(`${url}/blogs/create`,userData).then((res)=>{
        console.log(res)
        dispatch({ type: "fethingDataFail" });
}).catch(()=>{
    dispatch({ type: "fethingDataFail" });
})
}