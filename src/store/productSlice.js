import { createSlice} from '@reduxjs/toolkit'

export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
});


// But not use the this use freez method beacause not change

// const STATUSES={
//     IDLE:'idle',
//     ERROR:'error',
//     LOADING:'loading',
// }


// const initialState=[];

const productSlice=createSlice({
  
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE,

    },

    reducers:{
        // Change
        setProducts(state,action){
            // state.push(action.payload)

            // Do not do this never
            // const res=await fetch('link)
            state.data=action.payload;

         },
        //  remove(state,action){
        //     return state.filter((item)=>item.id !==action.payload);
        //  },
        setStatus(state,action){
            
            state.status=action.payload;

         },
    },
});

export const {setProducts,setStatus} =productSlice.actions;
export default productSlice.reducer;



// Thunks
export function fetchProduct(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING));
          
        //   const prop=getState().data    Only use for the data prop acess
        
        try{
            const res=await fetch('https://fakestoreapi.com/products')
            const data=await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));

         }catch(err){
              console.log(err);
              dispatch(setStatus(STATUSES.ERROR));
         }
    }
}