import React from "react";
// import {Switch, Route } from "react-router-dom";
import Header from './container/header'
// import Banner from './container/banner'
// import Footer from './container/footer'
import './dist/css/main.css'


 function Home() {
    return (
        <main>
                <Header />
                {/* <Switch>
                <Route exact path="/" component={Main}/>
                </Switch> */}
                {/* <Banner /> */}
                {/* <Footer /> */}
        </main>
    );
}

export default Home;