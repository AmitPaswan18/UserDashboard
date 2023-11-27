const User = require("../models/userModels");

const faker = require("faker");
async function generateFakeUsers(count) {
  const users = [];

  for (let i = 0; i < count; i++) {
    const fakeName = faker.name.findName();
    const fakeEmail = faker.internet.email();
    const fakeProfileImage = faker.internet.avatar();

    users.push({
      name: fakeName,
      email: fakeEmail,
      profileImage: fakeProfileImage,
    });
  }

  try {
    await User.insertMany(users);
    console.log(`${count} fake users inserted into the database.`);
  } catch (err) {
    console.error("Error inserting fake users:", err);
  }
}
// to genrate more user run this function
// generateFakeUsers(10);

const findall = async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: " Failed to get the Users" });
  }
};

module.exports = { findall };
