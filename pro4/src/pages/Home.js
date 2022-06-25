import React from 'react';
import { Container } from "@material-ui/core";
// import Header from '../components/header_homepage';
import PostList from '../components/PostList';
import Cpn_home from '../components/cpn_home';

export default function Home() {
  return <Container className="" style={{margin:'0', padding: '0'}}>
    <Cpn_home />
    {/* <PostList /> */}
  </Container>
}
