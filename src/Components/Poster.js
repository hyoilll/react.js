import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
`;

const Rating = styled.span``;

const Title = styled.span`
    display:block;
    margin: 5px 0px;
`;

const Year = styled.span`
    color:grey;
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => {
    return(
        <Link to={isMovie ? `/moive/${id}` : `/show/${id}`}>
            <Container>
                <ImageContainer>
                    <Image bgUrl={imageUrl}></Image>
                    <Rating>
                        <span role="img" aria-label="rating">★</span>{" "}
                        {rating} / 10
                    </Rating>
                </ImageContainer>
                <Title>{title}</Title>
                <Year>{year}</Year>
            </Container>
        </Link>
    )
}

Poster.prototype = {
    id:PropTypes.number.isRequired,
    imageUrl:PropTypes.string,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number,
    year:PropTypes.string,
    isMovie:PropTypes.bool,
}

export default Poster;