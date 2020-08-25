import React from "react";
import PageLayout from "../layout components/PageLayout";
import Header from "../organisim components/Header";
import HomeBody from "../organisim components/HomeBody";
import BaseNav from "../organisim components/BaseNav";
import Footer from "../organisim components/Footer";

function Home() {
  return (
    <PageLayout>
      <Header />
      <HomeBody />
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
