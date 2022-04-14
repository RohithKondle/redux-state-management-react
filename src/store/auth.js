import { createSlice } from "@reduxjs/toolkit"

const initialAuthenticatedState = {
    authenticated : false
}

const authenticatedSlice = createSlice({
    name : 'authenticated',
    initialState : initialAuthenticatedState,
    reducers : {
        login(state) {
            state.authenticated = true
        },
        logout(state) {
            state.authenticated = false
        }
    }
})

export const authenticatedActions = authenticatedSlice.actions;

export default authenticatedSlice.reducer;