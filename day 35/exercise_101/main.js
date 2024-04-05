"use strict";
const random_color_in_hexadecimal = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return color;
};
console.log(random_color_in_hexadecimal());
