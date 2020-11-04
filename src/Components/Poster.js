import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size:12px;
`;

const Image = styled.div`
    background-image: url(${props => props.bgUrl});
    height:180px;
    background-size:cover;
    border-radius: 4px;
    background-position: center;
`;

const Rating = styled.span`
    position:absolute;
    bottom:5px;
    right:10px;
    opacity:0;
    font-size:15px;
`;

const ImageContainer = styled.div`
    position:relative;
    &:hover{
        ${Image}{
            opacity:0.5;
            transition: opacity 0.3s ease-in-out;
        }
        ${Rating}{
            opacity:1;
            transition: opacity 0.3s ease-in-out;
        }
    }
    
`;

const Title = styled.span`
    display:block;
    margin: 5px 0px 3px 0px;
`;

const Year = styled.span`
    color:grey;
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => {
    return(
        <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
            <Container>
                <ImageContainer>
                    <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require('../assets/Play-removebg-preview.png')}></Image>
                    <Rating>
                        <span role="img" aria-label="rating">★</span>{" "}
                        {rating} / 10
                    </Rating>
                </ImageContainer>
                <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
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