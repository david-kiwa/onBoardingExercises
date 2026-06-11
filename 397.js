// ob-397-----------------------------------------------------------
function checkBracketOB397(newString) {
  const stringArr = [...newString];

  for (let i = 0; i < stringArr.length; i++) {
    switch (stringArr[i]) {
      case "{":
        if (stringArr.reverse()[i] !== "}") {
          return false;
        }
        break;

      case "[":
        if (stringArr.reverse()[i] !== "]") {
          return false;
        }
        break;

      case "(":
        if (stringArr.reverse()[i] !== ")") {
          return false;
        }
        break;
    }
  }

  return true;
}
console.log(checkBracketOB397("{[()]}"));
console.log(checkBracketOB397("{[(])}"));
