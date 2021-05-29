import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { Modal, TextContainer, TextField, FooterHelp } from "@shopify/polaris";
import { config } from "config";
import callApi from "api/callApi";
import "./style.css";
import {
    MobileCancelMajor
  } from '@shopify/polaris-icons';
const Rating = () => {
  const [rating, setRating] = useState(5);
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState("review");
  const [modalTitle, setModalTitle] = useState("Thanks you for rating!");
  const [valueFeedback, setValueFeedback] = useState("");
  const [reviewStatus, setReviewStatus] = useState(
    localStorage.getItem(config.shop + "-synctrack-review")
  );

  const changeRating = (newRating, name) => {
    setRating(newRating);
    setModalActive(true);
    if (newRating > 3) {
      setModalType("review");
      setModalTitle("Thanks for rating!");
    } else {
      setModalType("feedback");
      setModalTitle("How can we improve?");
    }
  };
  const handleChangeModal = (type) => {
    var shop = config.shop;
    if (type === "review") {
      if (rating > 3) {
        var reviewUrl = config.liveAppUrl + "#modal-show=ReviewListingModal";
        localStorage.setItem(shop + "-synctrack-review", "off");
        setReviewStatus("off");
        window.open(reviewUrl, "_blank");
      }
    } else if (type === "feedback") {
      localStorage.setItem(shop + "-synctrack-review", "off");
      setReviewStatus("off");
      let params = {
        action: "sendReview",
        comment: valueFeedback,
        star_value: rating,
        app_name: config.appName,
        urlParams: config.urlParams,
      };
      callApi("get", params, "admin/review/sendComment.php");
    }
    setModalActive(!modalActive);
  };
  const handleChangeFeedback = (value) => {
    setValueFeedback(value);
  };
  const closeReviewBar = () => {
    setReviewStatus("off");
  };
  return (
    <div>
      {reviewStatus !== "off" ? (
        <div className="ot_footer_star">
          <p>
            If you enjoy <b>{config.appName}</b>, would you mind taking a moment
            to rate it? It won't take more than a minites. Thanks for your
            support!
            <MobileCancelMajor  onClick={closeReviewBar}  className="iconClose" style = {{float:"right" ,marginTop:"5px",fill:"var(--md-theme-default-primary-on-background, #448aff)",cursor:"pointer"}}/>
          </p>
         
          <StarRatings
            rating={rating}
            starRatedColor="#ffcb0d"
            starHoverColor="#ffcb0d"
            starDimension="30px"
            starSpacing="5px"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
          />
        
          <Modal
            open={modalActive}
            onClose={handleChangeModal}
            title={modalTitle}
            primaryAction={{
              content:
                modalType === "review" ? "Write a quick Review" : "Submit",
              onAction: () =>
                modalType === "review"
                  ? handleChangeModal("review")
                  : handleChangeModal("feedback"),
            }}
          >
            <Modal.Section>
              <TextContainer>
                {modalType === "review" ? (
                  <p className="pt-3 pb-3">
                    We're so happy that you like{" "}
                    <strong>{config.appName}</strong> app and gave it a high
                    rate. Could you please spend 2 minutes leaving us a good
                    review on Shopify App Store? Your review means a lot to us.
                  </p>
                ) : (
                  <p className="pt-3 pb-3">
                    Let us know how we could be doing better. Your feedback is
                    important to improve <strong>{config.appName}</strong> app,
                    and we appreciate your time to leave us a comment.
                  </p>
                )}
              </TextContainer>
              {modalType === "feedback" ? (
                <TextField
                  value={valueFeedback}
                  onChange={handleChangeFeedback}
                  placeholder="Leave a review"
                />
              ) : null}
            </Modal.Section>
          </Modal>
        </div>
      ) : null}
    </div>
  );
};
export default Rating;

