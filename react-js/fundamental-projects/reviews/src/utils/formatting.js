const capitaliseName = function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const capitaliseFullName = function (fullName) {
  const nameArray = fullName.split(" ");
  const capitalisedName = nameArray
    .map((word) => capitaliseName(word))
    .join(" ");
  return capitalisedName;
};

export { capitaliseFullName };
