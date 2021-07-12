import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";

const Restaurant = (props) => {
  const initialRestaurantState = {
    id: null,
    name: "",
    address: {},
    cuisine: "",
    reviews: []
  };
  const [restaurant, setRestaurant] = useState(initialRestaurantState);
  const getRestaurant = (id) => {
    RestaurantDataService.get(id)
    .then(response => {
      setRestaurant(response.data);
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  useEffect(() => {
    getRestaurant(props.match.params.id);
  }, [props.match.params.id]);

  const deleteReview = (reviewId, index) => {
    RestaurantDataService.deleteReview(reviewId, props.user.id)
    .then(response => {
      setRestaurant((prevState) => {
        prevState.reviews.splice(index, 1)
        return ({
          ...prevState
        })
      })
    })
    .catch (err => {
      console.log(err);
    });
  };

  return (
    <div>
      {restaurant ? (
        <div>
          <h5>{restaurant.name}</h5>
          <p>
            <strong>Cuisine : </strong>{restaurant.cuisine} <br/>
            <strong>Address : </strong>{restaurant.address.building} {restaurant.address.street}, {restaurant.address.zipcode}
          </p>
          <Link to={"/restaurants/"+props.match.params.id+"/review"} className="btn btn-primary" >Add Review</Link>
          <h4>Review</h4>
          <div className="row">
            {restaurant.reviews.length > 0 ? (
              restaurant.reviews.map((review, index) => {
                return (
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">
                        {review.text}<br/>
                        <strong>User : </strong>{review.name}<br/>
                        <strong>Date : </strong>{review.date}
                      </p>
                      {props.user && props.user.id === review.user_id && 
                        <div className="row">
                          <button onClick={() => deleteReview(review._id, index)} className="btn btn-primary btn-sm col-md-5 mx-1 mb-1">Delete Review</button>
                          <Link to={{
                            pathname: "/restaurants/"+props.match.params.id+"/review",
                            state: {
                              currentReview: review
                            }
                          }} className="btn btn-primary btn-sm col-md-5 mx-1 mb-1">Edit Review</Link>
                        </div>
                      }
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="col-sm-4">
                <p>No reviews yet.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>No sestaurant selected.</p>
        </div>
      )}
    </div>
  );
}

export default Restaurant;