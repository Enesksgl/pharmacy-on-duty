import { createSlice } from '@reduxjs/toolkit'
import { pharmacyData } from '../static_data'
export const pharmacy = createSlice({
    name: 'pharmacy',
    initialState: {
       
       pharmacys : pharmacyData,
    
    },
    reducers: {
        addPharmacy: (state,action) => {
            let arr = state.pharmacys;
            arr.join(action.payload);
            state.pharmacys = arr;
        },
        
        addDuty: (state, action) => {
            let arr = state.pharmacys;
            console.log(action.payload[0])
            console.log(action.payload[1])
            arr.forEach(x=>{
                if(x.id === action.payload[1]){
                    x.nobetTarih.join(action.payload[0]);
                }
            })
            state.pharmacys = arr;
        },
    }
})

export const { addPharmacy, addDuty } =pharmacy.actions

export default pharmacy.reducer