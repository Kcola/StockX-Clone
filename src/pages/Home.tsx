import React from "react";
import PageLayout from "../components/Layouts/PageLayout";
import Header from "../components/Header";
import Body from "../components/Body";
import BaseNav from "../components/BaseNav";
import Footer from "../components/Footer";

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
