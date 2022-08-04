import React from 'react';
import { Container } from "@material-ui/core";
// import Header from '../components/header_homepage';
import Cpn_product from '../components/cpn_product/cpn_product.js';
import Cpn_footer from '../components/cpn_footer/cpn_footer.js';
import Cpn_gototop from '../components/cpn_gototop/cpn_gototop';
import Cpn_messenger from '../components/cpn_messenger/cpn_messenger';

export default function Product() {
  return <Container maxWidth={false} className="" style={{margin:'0', padding: '0',backgroundColor: 'white',}}>
    <Cpn_product />
    <Cpn_gototop />
    <Cpn_footer />
    <Cpn_messenger />
  </Container>
}