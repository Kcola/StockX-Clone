import React from "react";
import PageLayout from "../layout components/PageLayout";
import Header from "../organisim components/Header";
import Body from "../organisim components/Body";
import BaseNav from "../organisim components/BaseNav";
import Footer from "../organisim components/Footer";

function Home() {
  return (
    <PageLayout>
      <Header />
      <Body>
        <h3>Body</h3>
      </Body>
      <BaseNav>
        <h3>BaseNav</h3>
      </BaseNav>
      <Footer>
        <h3>Footer</h3>
      </Footer>
    </PageLayout>
  );
}
export default Home;
