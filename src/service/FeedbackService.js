import axios from 'axios';

const getFeedbackByIdService = (fid) => {
    console.log(`getFeedbackByIdService`);
    return axios.get(`/viewFeedBack/${fid}`);
}

const getAllFeedbackService = () => {
    console.log(`getAllFeedbackService`);
    return axios.get(`/viewAllfeedback`);
}


const deleteFeedbackService = (deleteFeedback) => {
    console.log('deleteFeedbackService');
    return axios.delete(`/deletefeedbackbyid/${deleteFeedback}`);
}


export { getFeedbackByIdService,getAllFeedbackService,deleteFeedbackService};