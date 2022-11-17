import { useRouter } from "next/router";
import classes from "../../../styles/Admin.module.scss";
import Admin from "../../../components/Admin/AdminPage.js";
import AlwaysMobileLayout from "../../../components/higher order components/AlwaysMobileLayout.js";
import AdminPageLayout from "../../../components/higher order components/AdminPageLayout.js";

const User = () => {
  const router = useRouter();
  console.log(router);
  const { user_id } = router.query;

  return (
    <div className={classes.Admin}>
      <p>Bla</p>
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
