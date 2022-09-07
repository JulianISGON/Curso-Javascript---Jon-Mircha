const string = "1234"

try {
    let reversed = string.split('').reverse().join('')
    console.log("Reversed String", reversed)
} catch (error) {
    console.error("Error", error.message);
} finally {
    console.info("Type of var", typeof string)
}