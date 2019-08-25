function validateUser(userObj) {
  try {
    if (Object.prototype.toString.call(userObj) !== "[object Object]")
      throw new Error("userObj in not an object");
    let isValid = true;
    for (let i in userObj) {
      if (userObj[i].length < 2) {
        isValid = false;
        break;
      }
    }
    return true;

  } catch (err) {
    console.error(err);
    console.log(userObj);
    return false;
  }
}

module.exports={
    validateUser
}
