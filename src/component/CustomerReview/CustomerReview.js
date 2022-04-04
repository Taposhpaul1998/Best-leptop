import './CustomerReview.css'

const CustomerReview = ({ review }) => {
    const { name, date, retting, _review } = review
    return (
        <div className="review-info">
            <h4>{name}</h4>
            <p> {_review}</p>
            <h5>Ratting: <small>{retting} star</small></h5>
            <h5>Date: <small>{date}</small></h5>
        </div>
    );
};

export default CustomerReview;