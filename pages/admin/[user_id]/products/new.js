import { useRouter } from "next/router";
import classes from "../../../../styles/Admin.module.scss";
import Admin from "../../../../components/Admin/AdminPage.js";
import AlwaysMobileLayout from "../../../../components/higher order components/AlwaysMobileLayout.js";
import AdminPageLayout from "../../../../components/higher order components/AdminPageLayout.js";
import CurrencyInput from "react-currency-input-field";
import madeWithOptions from "../../../../configs/madeWith.js";

const User = (props) => {
  const router = useRouter();
  //   console.log(router);
  const { user_id } = router.query;
  console.log(madeWithOptions);

  return (
    <div className={classes.AdminNewContainer}>
      <div className={classes.AdminNew}>
        <div className={classes.AddProductHeader}></div>
        <form className={classes.AddProductForm}>
          <div className={classes.Section1}>
            <div className={classes.TitleContainer}>
              <label htmlFor="product_name">Name</label>
              <input
                type="text"
                placeholder="Name"
                id="product_name"
                className={classes.TextInput}
              ></input>
            </div>
            <div className={classes.ImageContainer}>
              <p>Media</p>
              <div className={classes.FileInput}>
                <label htmlFor="product_image"></label>
                <button type="file" className={classes.FileInputButton}>
                  Add file
                </button>
                <p>Accepts .png, .jpeg</p>
                <input type="file" id="product_image"></input>
              </div>
            </div>
          </div>
          <div className={classes.Section2}>
            <div className={classes.PriceContainer}>
              <label htmlFor="price_input">Price</label>
              <CurrencyInput
                prefix="$"
                groupSeparator=","
                decimalSeparator="."
                decimalsLimit="2"
                id="price_input"
                placeholder="$"
              ></CurrencyInput>
            </div>
            <div className={classes.MadeWithContainer}>
              <label htmlFor="made_with_input"></label>
              <select name="made_with_input" id="made_with_input">
                {madeWithOptions.map((opt) => {
                  return (
                    <option value={opt} key={opt}>
                      {opt}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

//Was formerly inside the Admin div
// <Admin user_id={user_id}></Admin>

User.getLayout = function getLayout(page) {
  return (
    <AlwaysMobileLayout>
      <AdminPageLayout>{page}</AdminPageLayout>
    </AlwaysMobileLayout>
  );
};

export default User;
