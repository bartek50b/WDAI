function generatePassword(
  minPasswordLenght,
  maxPasswordLenght,
  includeUpperCase,
  includeSpecialCharacters
) {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const special = "!@#$%^&*()_+-={}[];:<>,.?/";

  let chars = lowerCaseLetters + digits;
  if (includeUpperCase) chars += upperCaseLetters;
  if (includeSpecialCharacters) chars += special;

  const passwordLength =
    Math.floor(Math.random() * (maxPasswordLenght - minPasswordLenght + 1)) +
    minPasswordLenght;

  let generatedPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const n = Math.floor(Math.random() * chars.length);
    generatedPassword += chars.charAt(n);
  }
  return generatedPassword;
}

document
  .getElementById("generate-password-button")
  .addEventListener("click", function () {
    const minPasswordLenght = parseInt(
      document.getElementById("minPasswordLenght").value,
      10
    );
    const maxPasswordLenght = parseInt(
      document.getElementById("maxPasswordLenght").value,
      10
    );
    const includeUpperCase =
      document.getElementById("includeUppercase").checked;
    const includeSpecialCharacters = document.getElementById(
      "includeSpecialCharacters"
    ).checked;
    const generatedPassword = generatePassword(
      minPasswordLenght,
      maxPasswordLenght,
      includeUpperCase,
      includeSpecialCharacters
    );
    alert("Wygenerowano hasło: " + generatedPassword);
  });
