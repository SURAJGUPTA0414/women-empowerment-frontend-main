import { getAllFeedback, getFeedBackById ,deleteFeedbackByID } from "../redux/FeedbackSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getFeedbackByIdService,getAllFeedbackService ,deleteFeedbackService} from "../service/FeedbackService";


const Feedback = () => {

    const [fid, setFid] = useState('');
    const [deleteFeedback, setDeleteFeedback] = useState('');

    const dispatch = useDispatch();

    const feedbackDataFromStore = useSelector((state) => state.feedback.feedbackState);
    const feedbackList = useSelector((state) => state.feedback.feedbackList);
    const feedbackDelete = useSelector((state) => state.feedback.feedbackDelete);

    const handleFeedback = (e) => {
        console.log('handleFeedback');
        setFid(e.target.value);
    }

    const handleDeleteFeedback = (e) => {
        console.log('handleDeleteFeedback');
        setDeleteFeedback(e.target.value);
    }


    const submitGetFeedbackById = (evt) => {
        evt.preventDefault();
        console.log('submitGetFeedbackById');
        getFeedbackByIdService(fid)
            .then((response) => {
                dispatch(getFeedBackById(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Feedback with ${fid} not found.`);
            });

        setFid('');
    }

    const submitGetAllFeedback = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllFeedback');
        getAllFeedbackService ()
            .then((response) => {
                dispatch(getAllFeedback(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitDeleteFeedback = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteFeedback');
        deleteFeedbackService(deleteFeedback)
            .then((response) => {
                alert(`Feedback deleted successfully.`)
                dispatch(deleteFeedbackByID(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Feedback with Id ${deleteFeedback} not found.`);
            });

    }



    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >FeedBack Component</h1>

            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <h3>Find feedback by id</h3>
                <form className="form form-group form-primary" onSubmit={submitGetFeedbackById}>
                    <input className="form-control mt-3" type="number" id="fid" name="fid" value={fid} onChange={handleFeedback} placeholder="Enter Feedback Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Feedback" />
                </form>

                <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>FeedBack Id</th>
                                <th>Comments</th>
                                <th>FeedbackDate</th>
                                <th>Overall_rating</th>
                                <th>Scheme_rating</th>
                                <th>Scheme_training_rating</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{feedbackDataFromStore.feedBackId}</td>
                                <td>{feedbackDataFromStore.comments}</td>
                                <td>{feedbackDataFromStore.feedbackdate}</td>
                                <td>{feedbackDataFromStore.overallRating}</td>
                                <td>{feedbackDataFromStore.schemeRating}</td>
                                <td>{feedbackDataFromStore.schemeTrainingRating}</td>

                            </tr>
                        </tbody>
                    </table>
                                    
            </div>
            <hr />
            {/* ---------------------------------------------------------------------------------- */}

            <div>
                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    <h3>Find all Feedback</h3>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllFeedback} value="Find All Feedback" />
                        </form>
                    </div>
                    <table className="table table-light table-striped ">
                        <thead>
                            <tr>
                                <th>FeedBack Id</th>
                                <th>Comments</th>
                                <th>FeedbackDate</th>
                                <th>Overall_rating</th>
                                <th>Scheme_rating</th>
                                <th>Scheme_training_rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedbackList.map((feedback, key) => {
                                return (
                                    <tr key={key}>  <td>{feedback.feedBackId}</td>
                                        <td>{feedback.comments}</td>
                                        <td>{feedback.feedbackdate}</td>
                                        <td>{feedback.overallRating}</td>
                                        <td>{feedback.schemeRating}</td>
                                        <td>{feedback.schemeTrainingRating}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>


            <hr />
            {/* ---------------------------------------------------------------------------------- */}
            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <h3>Delete feedback by Id</h3>
                <form className="form form-group form-primary" onSubmit={submitDeleteFeedback}>
                    <input className="form-control mt-3" type="number" id="deleteFeedback" name="deleteFeedback" value={deleteFeedback} onChange={ handleDeleteFeedback} placeholder="Enter Feedback Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Delete Feedback" />
                </form>

                <table className="table table-light table-striped ">
                    <thead>
                        <tr>
                                <th>FeedBack Id</th>
                                <th>Comments</th>
                                <th>FeedbackDate</th>
                                <th>Overall_rating</th>
                                <th>Scheme_rating</th>
                                <th>Scheme_training_rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                <td>{feedbackDelete.feedBackId}</td>
                                <td>{feedbackDelete.comments}</td>
                                <td>{feedbackDelete.feedbackdate}</td>
                                <td>{feedbackDelete.overallRating}</td>
                                <td>{feedbackDelete.schemeRating}</td>
                                <td>{feedbackDelete.schemeTrainingRating}</td>

                        </tr>
                    </tbody>
                </table>

            </div>

            <hr />
            {/* ---------------------------------------------------------------------------------- */}

        </div>
    );
}


export default Feedback;