function Validations() {
  var obj = {};

  obj.email = function (email) {
    if (!email) {
      return false;
    }

    if (
      !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
        email
      )
    ) {
      return false;
    }

    return true;
  };

  return obj;
}

export default Validations;
