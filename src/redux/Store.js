import feedbackReducer from './FeedbackSlice';

import { configureStore } from "@reduxjs/toolkit";

console.log('store');
const store = configureStore(
    {
        reducer: {
            feedback: feedbackReducer,
            
        }
    }
);

export default store;
