import { useRouter } from "next/router";
import Link from "next/link";
import classes from "../../../../styles/Admin.module.scss";
import Admin from "../../../../components/Admin/AdminPage.js";
import AlwaysMobileLayout from "../../../../components/higher order components/AlwaysMobileLayout.js";
import AdminPageLayout from "../../../../components/higher order components/AdminPageLayout.js";

const User = (props) => {
  const router = useRouter();
  console.log(router);
  const { user_id } = router.query;

  const products = [{ name: "Prajwal Product 1", src: "" }];

  return (
    <div className={classes.AdminProducts}>
      <Link href={`/admin/${user_id}/products/new`}>
        <a>You don't have any products, click here to add your first!</a>
      </Link>
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
