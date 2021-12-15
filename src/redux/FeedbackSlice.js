import { createSlice } from "@reduxjs/toolkit";
import FeedbackModel from '../model/FeedbackModel';

const FeedbackSlice = createSlice({
    name:'feedback',

    initialState: {

        feedbackState: new FeedbackModel(),
        feedbackList:[],
        feedbackDelete : new FeedbackModel(),
    },

    reducers: {
        getFeedBackById: (state, action) => {
            console.log("FeedbackSlice reducers getFeeBackById");
            state.feedbackState = action.payload;
        },
        getAllFeedback: (state, action) => {
            console.log('FeedbackSlice reducers getAllFeedback');
            state.feedbackList = action.payload;
        },
        deleteFeedbackByID : (state, action) => {
            console.log("FeedbackSlice reducers deleteFeedback");
            state.feedbackDelete = action.payload;
        }
        
    }
}

);

export const {getFeedBackById,getAllFeedback,deleteFeedbackByID} = FeedbackSlice.actions;
export default FeedbackSlice.reducer;