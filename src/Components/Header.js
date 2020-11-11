import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  height: 100%;
`;

const Item = styled.li`
  width: 50px;
  height: 100%;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: all 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Header extends Component {
  render() {
    return (
      <Head>
        <List>
          <Item current={this.props.location.pathname === "/"}>
            <SLink to="/">Home</SLink>
          </Item>
          <Item current={this.props.location.pathname === "/tv"}>
            <SLink to="/tv">TV</SLink>
          </Item>
          <Item current={this.props.location.pathname === "/search"}>
            <SLink to="/search">Search</SLink>
          </Item>
        </List>
      </Head>
    );
  }
}

export default withRouter(Header);
