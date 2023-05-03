import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = () => {
  const featureArray = [
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];
  const [like, setLike] = useState(true);
  const likeNFT = () => {
    if (!like) {
        setLike (true);
    }else {
        setLike (false);
    }
  };

  return (
    <div className={Style.nftcard}>
      {featureArray.map((el, i) => (
        <div className={Style.nftcard_box} key={i + 1}>
          <div className={Style.nftcard_box_img}>
            <Image
              src={el}
              alt="NFTimage"
              width={400}
              height={400}
              className={Style.nftcard_box_img_img}
            />
          </div>

          <div className={Style.nftcard_box_update}>
            <div className={Style.nftcard_box_update_left}>
              <div
                className={Style.nftcard_box_update_left_like}
                onClick={() => likeNFT()}>
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.nftcard_box_update_left_like_icon}
                  />
                )}
                {""} 22
              </div>
            </div>

            <div className={Style.nftcard_box_update_right}>
              <div className={Style.nftcard_box_update_right_info}>
                <small>Time Left</small>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
          </div>

          <div className={Style.nftcard_box_update_details}>
            <div className={Style.nftcard_box_update_details_price}>
              <div className={Style.nftcard_box_update_details_price_box}>
                <h4>Clone #17377</h4>
                <div className={Style.nftcard_box_update_details_price_boxes}>
                    <div className={Style.nftcard_box_update_details_price_box_bid}>
                        <small>Current Bid</small>
                        <p>1.000ETH</p>
                    </div>
                    <div className={Style.nftcard_box_update_details_price_box_stock}>
                        <small>61 in stock</small>
                    </div>
                </div>
              </div>
            </div>

            <div className={Style.nftcard_box_update_details_category}>
                <BsImage />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
