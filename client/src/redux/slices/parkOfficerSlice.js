import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../API";

const SLICE_NAME = "parkOfficer";

const getParkOfficers = createAsyncThunk(
  `${SLICE_NAME}/getParkOfficers`,
  async (param, thunkAPI) => {
    try {
      const {
        data: { data: parkOfficers },
      } = await API.getParkOfficers();
      return parkOfficers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const deleteParkOfficer = createAsyncThunk(
  `${SLICE_NAME}/deleteParkOfficer`,
  async (parkOfficerID, thunkAPI) => {
    try {
      await API.deleteParkOfficer(parkOfficerID);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const dismissParkOfficer = createAsyncThunk(
  `${SLICE_NAME}/dismissParkOfficer`,
  async (parkOfficerID, thunkAPI) => {
    try {
      await API.dismissParkOfficer(parkOfficerID);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const addParkOfficer = createAsyncThunk(
  `${SLICE_NAME}/addParkOfficer`,
  async (parkOfficer, thunkAPI) => {
    try {
      await API.addParkOfficer(parkOfficer);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const initialState = {
  parkOfficers: [],
  isLoading: false,
  error: null,
};

const parkOfficerSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(getParkOfficers.pending, (state, action) => {
      state.error = null;
      state.isLoading = true;
    });
    bulder.addCase(getParkOfficers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.parkOfficers = action.payload;
    });
    bulder.addCase(getParkOfficers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    bulder.addCase(deleteParkOfficer.pending, (state, action) => {
      state.error = null;
      state.isLoading = true;
    });
    bulder.addCase(deleteParkOfficer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    bulder.addCase(deleteParkOfficer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    bulder.addCase(dismissParkOfficer.pending, (state, action) => {
      state.error = null;
      state.isLoading = true;
    });
    bulder.addCase(dismissParkOfficer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    bulder.addCase(dismissParkOfficer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    bulder.addCase(addParkOfficer.pending, (state, action) => {
      state.error = null;
      state.isLoading = true;
    });
    bulder.addCase(addParkOfficer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    bulder.addCase(addParkOfficer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const { reducer } = parkOfficerSlice;

export {
  getParkOfficers,
  deleteParkOfficer,
  dismissParkOfficer,
  addParkOfficer,
};

export default reducer;
