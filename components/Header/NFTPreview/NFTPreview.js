import classes from "./NFTPreview.module.scss";

const NFTPreview = ({ direction, ...props }) => {
  //Needs to unpack name, price, username of poster, profilepic of poster, number of editions, amount sold

  return (
    <div className={classes.NFTCardContainer}>
      <div className={classes.NFTCard}></div>
    </div>
  );
};

// <div className={classes.NFTCard}>
//         <div className={classes.NFTImage}></div>
//       </div>

export default NFTPreview;

// .NFTCardContainer {
//     position: relative;
//     width: 33.33%;
//     height: 300px;
//     padding: 20px;
//     background-color: pink;
//     display: block;
//     //   overflow: hidden;

//     .NFTCard {
//       width: calc(100%);
//       height: calc(100%);
//       // left: 20px;
//       background-color: red;
//       float: left;
//       // direction: ltr;
//       // box-sizing: border-box;
//       // right: 20px;
//     }

//     .NFTCard:hover {
//       position: absolute;
//       background-color: green;
//       // left: 20px;
//       // right: 0;
//       width: calc(200%);
//       // height: calc(100% - 40px);
//       z-index: 5;
//       transition: width 0.22s;
//       // direction: ltr;
//       display: block;
//     }
//   }
