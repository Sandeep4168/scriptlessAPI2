import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const getHeaders = createAsyncThunk("header/getHeaders", async ({ selectedOption, navigate }, { rejectWithValue }) => {
    try {

        const data = localStorage.getItem("jsonFile");
        const collections = data.item
        const headers = collections.map((collection) => collection.request.body)
        for (let i = 0; i < collections.length; i++) {
            if (collections[i].name === selectedOption) {
                console.log(JSON.parse(headers[i].raw))

                localStorage.setItem("header", {...headers[i].raw})
                return headers.headers[i].raw
            }
        }

    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

const headerSlice = createSlice({
    name:"header",
    initialState:{
        headers :[],
        error : "",
        loading : false

    },
    reducers: {
        setHeader: (state, action) => {
          state.user = action.payload;
        }
        
      },
    extraReducers :{
    
        [getHeaders.pending] : (state,action) => {
            state.loading = true
        },
        [getHeaders.fulfilled] : (state,action) => {
            state.loading = false
            state.tours = action.payload
        },
        [getHeaders.rejected] : (state,action) => {
            state.loading = false
            state.error = action.payload.message
            
        }
    }
})

export default headerSlice.reducer