const url = "https://randomuser.me/api/";

const fetchUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const { email, phone } = person;
  const { large: img } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    email,
    phone,
    img,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default fetchUser;
