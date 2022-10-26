import classes from "./NFTPreview.module.scss";
import { useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";

const NFTPreview = ({
  direction,
  display,
  name,
  price_in_cents,
  price_in_cents_sold,
  cloudinary_id,
  ...props
}) => {
  //Needs to unpack name, price, username of poster, profilepic of poster, number of editions, amount sold
  const TestPicSrc = "/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png";
  const CLOUDINARY_CLOUD_NAME = "dk1q4n7bt";

  const url = buildUrl(cloudinary_id, {
    cloud: {
      cloudName: CLOUDINARY_CLOUD_NAME,
    },
  });

  const urlBlurred = buildUrl(cloudinary_id, {
    cloud: {
      cloudName: CLOUDINARY_CLOUD_NAME,
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });

  return (
    <div
      className={classes.NFTCardContainer}
      style={{ direction, display: display ? "block" : "none" }}
    >
      <div className={classes.NFTCard}>
        <div className={classes.Image}>
          <Image layout="fill" objectFit="cover" src={url}></Image>
        </div>
        <div className={classes.Info}>
          <div className={classes.InfoInner}>
            <div className={classes.MainSection}>
              <p className={classes.Name}>{name}</p>
              <div className={classes.MainInfo}>
                <div className={classes.PriceAmountSold}>
                  <div className={classes.PriceBox}>
                    <p className={classes.PriceLabel}>PRICE</p>
                    <p className={classes.Price}>
                      ${(price_in_cents / 100).toFixed(2)}
                    </p>
                  </div>
                  <div className={classes.AmountSoldBox}>
                    <p className={classes.AmountSoldLabel}>AMOUNT SOLD</p>
                    <p className={classes.AmountSold}>
                      ${(price_in_cents_sold / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className={classes.EditionsViews}></div>
              </div>
            </div>
            <div className={classes.UsernameSection}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPreview;
