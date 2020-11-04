import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div`
    height: calc(100vh - 50px);
    width:100%;
    position:relative;
    padding:50px;
`;

const Backdrop = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-image:url(${p => p.bgImage});
    background-position:center center;
    background-size:cover;
    filter:blur(5px);
    opacity:0.5;
`;


const Content = styled.div`
    width:100%;
    display:flex;
    position:relative;
    z-index:1;
    height:100%;
`;

const Cover = styled.div`
    width:30%;
    background-image:url(${p => p.bgUrl});
    background-position:center;
    background-size:cover;
    height:100%;
    border-radius:5px;
`;

const Data = styled.div`
    width:70%;
    margin-left:10px;
`;

const Title = styled.h1`
    font-size:32px;
`;

const ItemContainer = styled.div`
    margin:20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin:0px 10px;
`;

const Overview = styled.p`
    font-size:12px;
    opacity:0.7;
    line-height:2;
    width: 50%;
`;

const DetailPresenter = ({result, loading, error}) => {
    console.log(result)
    return(
        loading ? <Loader /> :
        <Container>
            {result && <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path ? result.backdrop_path : result.poster_path}`}></Backdrop>}
            <Content>
                {result && <Cover bgUrl = {result.poster_path ? `https://image.tmdb.org/t/p/w300${result.poster_path}` : require('../../assets/noScreen.jpg')}></Cover>}
                <Data>
                    <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                    <ItemContainer>
                        <Item>{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</Item>
                        <Divider>・</Divider>
                        <Item>
                            {result.runtime ? result.runtime : result.episode_run_time[0]} min
                        </Item>
                        <Divider>・</Divider>
                        <Item>
                            {result.genres && result.genres.map((genre, idx) => idx === result.genres.length - 1 ? genre.name : `${genre.name} / `)}
                        </Item>
                    </ItemContainer>
                    <Overview>{result.overview}</Overview>
                </Data>
            </Content>
        </Container> 
    )
};

DetailPresenter.propTypes = {
    result:PropTypes.object,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string,
}

export default DetailPresenter;