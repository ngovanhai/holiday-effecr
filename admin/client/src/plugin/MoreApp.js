import { Col, Row } from "antd";
import React from "react";
// import "../css/more-app.css";
import moreAppConfig from "./moreAppConfig";

function shuffleArray(array) {
    let arrPush = [];
    for (let i = 0; i < 3; i++) {
        const j = array[Math.floor(Math.random() * array.length)];
        array = array.filter((item) => item !== j);
        arrPush.push(j);
    }
    return arrPush;
}
export const MoreApp = () => {
    const shuffledPosts = shuffleArray(moreAppConfig.list);
    return (
        <div>
            <div className="footer-header ot_footer_star">
                Some other sweet <strong>Omega</strong> apps you might like!{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.shopify.com/partners/omegaapps"
                >
                    (View all app)
          </a>
            </div>
            <Row className="omg-more-app">
                {shuffledPosts.map((post, idx) => {
                    return (
                        <Col key={idx} sm={24} md={24} lg={12} xl={8}>
                            <p>
                                <a
                                    title={post.alt}
                                    href={
                                        post.href +
                                        "?surface_detail=synctrack_paypal&&surface_type=Omega_Admin"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img className="image_plugin" alt={post.alt} src={post.src} />
                                </a>
                            </p>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}
