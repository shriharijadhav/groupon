import React from 'react'
import StarRatings from 'react-star-ratings';

const StarRating = ({ratingPoints}) => {
  return (
    <StarRatings
    bordered={true}
    starDimension='15px'
    starSpacing='2px'
     rating={ratingPoints}
    starRatedColor="#FEC020"
    starEmptyColor='lightgrey'
     // changeRating={this.changeRating}
    numberOfStars={5}
    name='rating'
  />
  )
}

export default StarRating
