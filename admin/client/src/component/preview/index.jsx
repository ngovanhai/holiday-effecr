import { Card, Heading } from "@shopify/polaris";
import { rootlink } from "config";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Haha from "./previewAnimation";
import "./preview.scss";
import PreviewAnimation from "./previewAnimation";
import { version } from "config";

const useStyles = createUseStyles({});
function Preview(props) {
  const {
    frameUpload,
    frame_gif,
    frame,
    icon,
    image,
    number_of_icons,
    iconColor,
    imageUpload,
    animation_speed,
    icon_size,
    showFrame,
    image_size,
    frame_time,
    effect_time,
    selectEffect,
  } = props;
  const rootLinkAssets = `${rootlink}/holiday-effects/admin/client/src/asset/image/`;
  const [frame_sample, setFrameSample] = useState("");
  const [frame_upload, setFrameUpload] = useState("");
  const [frameGif, setFrameGif] = useState("");
  const [showTop, setShowTop] = useState();
  const [showBottom, setShowBottom] = useState();
  useEffect(() => {
    switch (showFrame) {
      case "1":
        setShowTop("block");
        setShowBottom("none");
        break;
      case "2":
        setShowTop("none");
        setShowBottom("block");
        break;
      case "3":
        setShowTop("block");
        setShowBottom("block");
        break;
      default:
        break;
    }
  }, [showFrame]);
  useEffect(() => {
    if (frameUpload !== "") {
      setFrameUpload(frameUpload);
      setFrameSample("");
      setFrameGif("");
    }
  }, [frameUpload]);
  useEffect(() => {
    if (frame !== "") {
      setFrameSample(frame);
      setFrameUpload("");
      setFrameGif("");
    }
  }, [frame]);
  useEffect(() => {
    if (frame_gif !== "") {
      setFrameGif(frame_gif + `?v=${version}`);
      setFrameSample("");
      setFrameUpload("");
    }
  }, [frame_gif]);
  function ot_omgholiday_randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
  }
  function ot_omgholiday_randomFloat(low, high) {
    return low + Math.random() * (high - low);
  }
  function ot_omgholiday_durationValue(value) {
    return value + "s";
  }
  function ot_omgholiday_pixelValue(value) {
    return value - 20 + "px";
  }

  let resultIcon = [];
  if (icon !== "") {
    let arrayIcon = JSON.parse(icon);
    arrayIcon.map((x) => {
      for (let i = 0; i < number_of_icons; i++) {
        let leftStyle = ot_omgholiday_pixelValue(
          ot_omgholiday_randomInteger(30, window.innerWidth / 2.5)
        );
        let spinAnimationName =
          Math.random() < 0.5 ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
        let spinDuration = ot_omgholiday_durationValue(
          ot_omgholiday_randomFloat(4, 8)
        );
        let leafDelay = ot_omgholiday_durationValue(
          ot_omgholiday_randomFloat(0, 5)
        );
        resultIcon.push(
          <div
            className="preview__image"
            style={{
              MozAnimationName: spinAnimationName,
              left: leftStyle,
              animationDuration: `${animation_speed}s,${animation_speed}s`,
              animationDelay: `${leafDelay},${leafDelay}`,
              top: "7rem",
            }}
          >
            <i
              className={`fa ${x}`}
              aria-hidden="true"
              style={{
                top: "-3rem",
                fontSize: `${icon_size}px`,
                animationName: spinAnimationName,
                animationDuration: spinDuration,
                color: iconColor,
              }}
            ></i>
          </div>
        );
      }
    });
  }
  let resultImage = [];
  if (image !== "") {
    let arrImages = JSON.parse(image);
    arrImages.map((x) => {
      for (let i = 0; i < number_of_icons; i++) {
        let leftStyle = ot_omgholiday_pixelValue(
          ot_omgholiday_randomInteger(30, window.innerWidth / 2.5)
        );
        let spinAnimationName =
          Math.random() < 0.5 ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
        let spinDuration = ot_omgholiday_durationValue(
          ot_omgholiday_randomFloat(4, 8)
        );
        let leafDelay = ot_omgholiday_durationValue(
          ot_omgholiday_randomFloat(0, 5)
        );
        resultImage.push(
          <div
            className="preview__image"
            style={{
              AnimationName: spinAnimationName,
              left: leftStyle,
              animationDuration: `${animation_speed}s,${animation_speed}s`,
              animationDelay: `${leafDelay},${leafDelay}`,
              top: "7rem",
              zIndex: -1,
            }}
          >
            <img
              src={`${rootLinkAssets}${x}.png?v=${version}`}
              style={{
                width: `${image_size}px`,
                animationName: spinAnimationName,
                animationDuration: spinDuration,
              }}
            ></img>
          </div>
        );
      }
    });
  }

  let resultImageUpload = [];
  if (imageUpload !== "") {
    let arrImagesUpload = JSON.parse(imageUpload);
    arrImagesUpload.map((image) => {
      for (let i = 0; i < number_of_icons; i++) {
        let leftStyle = ot_omgholiday_pixelValue(
          ot_omgholiday_randomInteger(30, window.innerWidth / 2.5)
        );
        let spinAnimationName =
          Math.random() < 0.5 ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
        let spinDuration = ot_omgholiday_durationValue(
          ot_omgholiday_randomFloat(4, 8)
        );
        let leafDelay = ot_omgholiday_durationValue(
          ot_omgholiday_randomFloat(0, 5)
        );
        resultImageUpload.push(
          <div
            className="preview__image preview__imagesUpload"
            style={{
              AnimationName: spinAnimationName,
              left: leftStyle,
              animationDuration: `${animation_speed}s,${animation_speed}s`,
              animationDelay: `${leafDelay},${leafDelay}`,
              top: "7rem",
            }}
          >
            <img
              src={`${image}.png?v=${version}`}
              style={{
                width: `${image_size}px`,
                animationName: spinAnimationName,
                animationDuration: spinDuration,
              }}
            ></img>
          </div>
        );
      }
    });
  }

  return (
    <div className="preview" style={{ position: "relative" }}>
      <Card title="Preview event" sectioned></Card>
      <div
        className={
          frameGif !== ""
            ? "preview__frameTop preview__frameGif preview__top"
            : frame_upload !== ""
              ? "preview__frameTop preview__frameUpload"
              : "preview__frameTop"
        }
        style={{
          backgroundImage: `url(${frameUpload !== ""
            ? frame_upload
            : frame_sample !== ""
              ? rootLinkAssets + frame_sample + ".png"
              : frameGif
            }`,
          display: showTop
        }}
      ></div>
      <div
        className={
          frameGif !== ""
            ? "preview__frameBottom preview__frameGif preview__bottom"
            : frame_upload !== ""
              ? "preview__frameBottom preview__frameUpload"
              : "preview__frameBottom"
        }
        style={{
          backgroundImage: `url(${frameUpload !== ""
            ? frame_upload
            : frame_sample !== ""
              ? rootLinkAssets + frame_sample + `.png?v=${version}`
              : frameGif
            }`,
          animationName: "runBottom",
          display: showBottom
        }}
      ></div>
      <div style={{ width: "40vw" }}>
        <div className="preview__effect">
          {resultIcon}
          {resultImage}
          {resultImageUpload}
        </div>
      </div>
      <PreviewAnimation selectEffect={selectEffect} />
    </div>
  );
}

export default React.memo(Preview);
