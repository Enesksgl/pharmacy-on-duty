import { createSlice } from '@reduxjs/toolkit'
import { pharmacyData } from '../static_data'
export const pharmacy = createSlice({
    name: 'pharmacy',
    initialState: {

        pharmacys: pharmacyData,

    },
    reducers: {
        addPharmacy: (state, action) => {
            let arr = state.pharmacys;
            arr.push(action.payload.pharmacy);
            state.pharmacys = arr;
        },

        addDuty: (state, action) => {
            let arr = state.pharmacys.map(x => {
                if (x.id == action.payload.id) {
                    let temp = { ...x }
                    temp.nobetTarih.push(action.payload.tarih.toString());
                    return temp;
                }
                return x;
            })
            state.pharmacys = arr;
        },
    }
})

export const { addPharmacy, addDuty } = pharmacy.actions

export default pharmacy.reducer