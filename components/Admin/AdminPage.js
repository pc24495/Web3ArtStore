import classes from "./AdminPage.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import getBase64 from "../../helpers/getBase64.js";
import axios from "../../axios.js";
import madeWithOptions from "../../configs/madeWith.js";
import CurrencyInput from "react-currency-input-field";
import dollarsToCents from "dollars-to-cents";

const AdminPage = (props) => {
  const { user_id } = props;
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [madeWith, setMadeWith] = useState(madeWithOptions[0]);
  const [priceInCents, setPriceInCents] = useState("");
  const router = useRouter();

  const onProductUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChangeMadeWith = (event) => {
    setMadeWith(event.target.value);
  };

  const submitProduct = (event) => {
    event.preventDefault();
    getBase64(file)
      .then((result) => {
        console.log(madeWith);
        axios
          .post("/products", {
            name: name,
            file: result,
            madeWith,
            priceInCents,
          })
          .then((response) => {
            console.log(response.data);
            router.push("/");
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onPriceChange = (event) => {
    setPriceInCents(dollarsToCents(event.target.value));
  };

  return (
    <div className={classes.AdminPage}>
      <div className={classes.AdminPageInner}>
        <label htmlFor="image">
          Image:
          <input type="file" id="image" onChange={onProductUpload}></input>
        </label>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" onChange={onNameChange}></input>
        </label>
        <label htmlFor="madeWith">
          Made with:
          <select name="madeWith" id="madeWith" onChange={handleChangeMadeWith}>
            {madeWithOptions.map((madeWithOption) => (
              <option value={madeWithOption} key={madeWithOption}>
                {madeWithOption}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="price">
          Price:
          <CurrencyInput
            id="price"
            name="price"
            placeholder="Please enter a price"
            decimalsLimit={2}
            decimalScale={2}
            fixedDecimalLength={2}
            intlConfig={{ locale: "en-US", currency: "USD" }}
            onChange={onPriceChange}
          />
        </label>
        <button type="submit" onClick={submitProduct}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
