import React from 'react';
import { Container } from "@material-ui/core";
// import Header from '../components/header_homepage';
import Cpn_home from '../components/cpn_home';
import Cpn_footer from '../components/cpn_footer/cpn_footer.js';
import Cpn_gototop from '../components/cpn_gototop/cpn_gototop';

export default function Home() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_home />
    <Cpn_gototop />
    <Cpn_footer />
  </Container>
}
