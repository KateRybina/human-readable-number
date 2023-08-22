module.exports = function toReadable(number) {
    const arrayNumber = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arrayDozens = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    number = number.toString().split("");
    let lenNumber = number.length;
    number = number.join("");
    let firstIndex = number[0];
    let twoIndex = number[1];
    let threeIndex = number[2];
    let indexTwoThree = twoIndex + threeIndex;
    let stringNumber = "";

    //0 ...19
    if (number < 20) {
        for (let i = 0; i <= arrayNumber.length; i++) {
            if (i == number) {
                stringNumber = arrayNumber[i];
            }
        }
    }

    //20 ... 99
    if (number >= 20 && number < 100) {
        //20 30 40 50 60 70 80 90
        if (twoIndex === "0") {
            number = number / 10;

            for (let i = 1; i <= arrayDozens.length; i++) {
                if (i == number) {
                    stringNumber = arrayDozens[i];
                }
            }
        }

        //21..29, 31 ..39, 41..49, 51..59, 61..69, 71..79, 81..89,91..99
        if (twoIndex !== "0") {
            for (let i = 0; i <= arrayDozens.length; i++) {
                if (i == firstIndex) {
                    for (let j = 0; j <= arrayNumber.length; j++) {
                        if (j == twoIndex) {
                            stringNumber = `${arrayDozens[i]} ${arrayNumber[j]}`;
                        }
                    }
                }
            }
        }
    }

    //100 ... 1000
    if (number >= 100) {
        //100 200 300 400 500 600 700 800 900
        if (twoIndex === "0" && threeIndex === "0") {
            number = number / 100;
            for (let i = 0; i <= arrayNumber.length; i++) {
                if (i == number) {
                    stringNumber = `${arrayNumber[i]} hundred`;
                }
            }
        }
        //110 120 ...190....990
        if (twoIndex !== "0" && threeIndex === "0") {
            for (let i = 1; i <= arrayNumber.length; i++) {
                if (i == firstIndex) {
                    for (let j = 0; j <= arrayDozens.length; j++) {
                        if (j == twoIndex) {
                            stringNumber = `${arrayNumber[i]} hundred ${arrayDozens[j]}`;
                        }
                    }
                }
            }
        }

        //101 102 ...109
        if (twoIndex === "0" && threeIndex !== "0") {
            for (let i = 1; i <= arrayNumber.length; i++) {
                if (i == firstIndex) {
                    for (let j = 0; j <= arrayNumber.length; j++) {
                        if (j == threeIndex) {
                            stringNumber = `${arrayNumber[i]} hundred ${arrayNumber[j]}`;
                        }
                    }
                }
            }
        }

        //111..119 211..219 911 ..919
        if (
            twoIndex !== "0" &&
            threeIndex !== "0" &&
            indexTwoThree >= 11 &&
            indexTwoThree <= 19
        ) {
            for (let i = 1; i <= arrayNumber.length; i++) {
                if (i == firstIndex) {
                    for (let j = 0; j <= arrayNumber.length; j++) {
                        if (j == indexTwoThree) {
                            stringNumber = `${arrayNumber[i]} hundred ${arrayNumber[j]}`;
                        }
                    }
                }
            }
        }

        //121...129    991...999
        if (twoIndex !== "0" && threeIndex !== "0" && indexTwoThree > 20) {
            for (let i = 1; i <= arrayNumber.length; i++) {
                if (i == firstIndex) {
                    for (let j = 0; j <= arrayDozens.length; j++) {
                        if (j == twoIndex) {
                            for (let k = 1; k <= arrayNumber.length; k++) {
                                if (k == threeIndex) {
                                    stringNumber = `${arrayNumber[i]} hundred ${arrayDozens[j]} ${arrayNumber[k]}`;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return stringNumber;
};
