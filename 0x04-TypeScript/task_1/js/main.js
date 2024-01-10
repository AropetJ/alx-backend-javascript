"use strict";
exports.__esModule = true;
function printTeacher(firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
}
exports["default"] = printTeacher;
console.log(printTeacher('John', 'Doe'));
