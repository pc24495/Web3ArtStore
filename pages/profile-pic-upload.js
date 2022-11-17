import classes from "../styles/ProfilePicUpload.module.scss";
import { useState } from "react";
import { useUserData } from "../store/UserDataProvider/UserDataProvider.js";
import Button from "../components/Button/Button.js";
import Backdrop from "../components/Backdrop/Backdrop.js";
import ReactEasyCrop from "react-easy-crop";
import axios from "../axios.js";
import { useRouter } from "next/router";
import Layout from "../components/higher order components/Layout.js";

export default function ProfilePicUpload() {
  //   const { username } = useUsername();
  const { userData, setUserData } = useUserData();
  const router = useRouter();
  const [state, setState] = useState({
    croppedImageSrc: false,
    src: false,
    showBackdrop: false,
    inputKey: 5,
    crop: {
      x: 0,
      y: 0,
    },
    zoom: 1,
    aspect: 1,
  });
  const [imageCrop, setImageCrop] = useState(null);

  //   const empty = "";

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setState((prev) => ({
          ...prev,
          src: reader.result,
          showBackdrop: true,
        }));
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const getRadianAngle = (degreeValue) => {
    return (degreeValue * Math.PI) / 180;
  };
  //
  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
      image.src = url;
    });

  const submitImage = (event) => {
    console.log(state.croppedImageSrc);
    axios
      .patch("/users/profile-pic", {
        profile_pic: state.croppedImageSrc,
      })
      .then((response) => {
        // console.log(response.headers);
        // console.log(response.data.profile_pic);
        setUserData((prev) => {
          return {
            ...prev,
            profile_pic_cloudinary_public_id:
              response.data.profile_pic_cloudinary_public_id,
          };
        });
        router.push("/");
      });
  };

  const getCroppedImg = async (imageSrc, pixelCrop, rotation = 0) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

    // set each dimensions to double largest dimension to allow for a safe area for the
    // image to rotate in without being clipped by canvas context
    canvas.width = safeArea;
    canvas.height = safeArea;

    // translate canvas context to a central location on image to allow rotating around the center.
    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.rotate(getRadianAngle(rotation));
    ctx.translate(-safeArea / 2, -safeArea / 2);

    // draw rotated image and store data.
    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    );

    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // paste generated rotate image with correct offsets for x,y crop values.
    ctx.putImageData(
      data,
      0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
      0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
    );

    // As Base64 string
    return canvas.toDataURL("image/jpeg");
    // return canvas;
  };

  const prepareImage = async (event) => {
    const finalImage = await getCroppedImg(state.src, imageCrop);
    setState({ ...state, croppedImageSrc: finalImage, showBackdrop: false });
  };

  const onBackdropClose = (event) => {
    setState((prev) => ({ ...prev, showBackdrop: false }));
  };

  const onCropChange = (crop) => {
    setState({ ...state, crop: crop });
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setImageCrop(croppedAreaPixels);
  };

  const onZoomChange = (zoom) => {
    setState({ ...state, zoom: zoom });
  };

  return (
    <div className={classes.ProfilePicUploadPage}>
      <div className={classes.ProfilePicUpload}>
        <div className={classes.UploadSection}>
          <h2 className={classes.SelectAProfilePic}>
            Select a profile picture
          </h2>

          <div className={classes.PicOverlay}>
            +
            <input
              type="file"
              style={{
                opacity: "0.0",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
              }}
              className={classes.InputPic}
              accept="image/*"
              onChange={onSelectFile}
              key={state.inputKey}
            />
          </div>
          <img
            src={state.croppedImageSrc || "/EmptyProfilePic.png"}
            className={classes.ProfilePicture}
            alt="Profile"
          ></img>
          <Button onClick={submitImage}>Submit</Button>
        </div>
        <Backdrop showBackdrop={state.showBackdrop}>
          <div className={classes.CropBox}>
            {state.src && (
              <ReactEasyCrop
                image={state.src}
                crop={state.crop}
                zoom={state.zoom}
                aspect={state.aspect}
                cropShape="round"
                showGrid={false}
                onCropChange={onCropChange}
                onCropComplete={onCropComplete}
                onZoomChange={onZoomChange}
              ></ReactEasyCrop>
            )}
          </div>
          <div className={classes.ButtonContainer}>
            <Button onClick={onBackdropClose}>Close</Button>
            <Button onClick={prepareImage}>Done</Button>
          </div>
        </Backdrop>
      </div>
    </div>
  );
}

ProfilePicUpload.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
