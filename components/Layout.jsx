import React from 'react';
import Head from 'next/head';
import GlobalStyle from '@catho/quantum/GlobalStyle';
import { Container, Row, Col } from '@catho/quantum/Grid';

function Layout(props) {
  const { title, children } = props;
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Container fluid>
          <Row>
            <Col>
              <h1>{title}</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <Container no-gutters>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Container fluid>
          <Row>
            <Col>FOOTER HERE</Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Layout;
