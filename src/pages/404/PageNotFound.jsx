import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contantWrapper/ContantWrapper";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
                <Link to="/" className="redirectToHome">Home page ➡️</Link>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;