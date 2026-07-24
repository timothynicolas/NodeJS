const checkAge = (req, res, next) => {
  const { age } = req.query;

  if (age) {
    if (Number(age) < 18) {
      return res.status(403).send("Access Denied - Must be 18 or older");
    } else {
      req.userAge = Number(age);
      return next();
    }
  }

  return res.status(403).send("Please provide your age");
};

module.exports = checkAge;
