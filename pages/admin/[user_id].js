import { useRouter } from "next/router";
import classes from "../../styles/Admin.module.css";
import Admin from "../../components/Admin/AdminPage.js";
import AlwaysMobileLayout from "../../components/higher order components/AlwaysMobileLayout.js";

const User = () => {
  const router = useRouter();
  const { user_id } = router.query;

  return (
    <div className={classes.Admin}>
      <Admin user_id={user_id}></Admin>
    </div>
  );
};

User.getLayout = function getLayout(page) {
  return <AlwaysMobileLayout>{page}</AlwaysMobileLayout>;
};

export default User;
