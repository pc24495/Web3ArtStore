const bcrypt = require("bcrypt");
const { prisma } = require("../../../db/index.ts");
const SALT_ROUNDS = 10;

async function register(request, response) {
  bcrypt.hash(password, SALT_ROUNDS, async (err, hash) => {
    const username = request.body.username;
    const password = request.body.password;

    await prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
      },
    });

    db.query(
      "INSERT INTO users(username, password) values($1,$2) RETURNING *",
      [username, hash],
      async (err, result) => {
        if (err) {
          console.log(err);
          newRegisterErrors.usernameErrors.push(
            "Username is already taken, please select a different one"
          );
          res.json({ success: false, errors: newRegisterErrors });
        } else {
          // console.log(result.rows[0]);
          const { user_id } = result.rows[0];
          const friendRequestIDs = await db
            .query("SELECT user_id FROM roles WHERE role=$1", [
              "Default Friend Request",
            ])
            .then((result) => result.rows.map((row) => row.user_id));
          Promise.all(
            friendRequestIDs.map(
              async (request_user_id) =>
                await db.query("INSERT INTO friend_requests VALUES ($1, $2)", [
                  request_user_id,
                  user_id,
                ])
            )
          );
          const friendIDs = await db
            .query("SELECT user_id FROM roles WHERE role=$1", [
              "Default Friend",
            ])
            .then((result) => result.rows.map((row) => row.user_id));
          Promise.all(
            friendIDs.map(
              async (friend_id) =>
                await db.query("INSERT INTO friends VALUES ($1, $2)", [
                  friend_id,
                  user_id,
                ])
            )
          );
          res.json({ success: true });
        }
        //
      }
    );
  });
  //   response.json({ payload: "Post posted" });
}

exports.register = register;
