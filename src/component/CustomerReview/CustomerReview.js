
const CustomerReview = ({ review }) => {
    const { name, date, retting, _review } = review
    return (
        <div className="review-info">
            <h4>{name}</h4>
            <p> {_review}</p>
            <p>Ratting: {retting} star</p>
            <p>Date: <small>{date}</small></p>
        </div>
    );
};

export default CustomerReview;