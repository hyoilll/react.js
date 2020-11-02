import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding:0px 20px;
`;


const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) => ( loading ? <Loader /> :
    <Container>
        {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map(movie => <Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path} year={movie.release_date.substring(0, 4)} rating={movie.vote_average} isMoive={true}/>)}</Section>}
        {upcoming && upcoming.length > 0 && <Section title="upcoming Movies">{upcoming.map(movie => <Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path} year={movie.release_date.substring(0, 4)} rating={movie.vote_average} isMoive={true}/>)}</Section>}
        {popular && popular.length > 0 && <Section title="Popular Movies">{popular.map(movie => <Poster key={movie.id} id={movie.id} title={movie.original_title} imageUrl={movie.poster_path} year={movie.release_date.substring(0, 4)} rating={movie.vote_average} isMoive={true}/>)}</Section>}
        {error && <Message color={'#e74c3c'}text={error}/>}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    upcoming:PropTypes.array,
    popular:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string,
}

export default HomePresenter;