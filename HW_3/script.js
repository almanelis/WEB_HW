// 1
function calculateVolumeAndArea(sideLength) {
    if (typeof sideLength !== "number" || sideLength <= 0 || !Number.isInteger(sideLength)) {
        return "При вычислении произошла ошибка";
    }

    const volume = Math.pow(sideLength, 3);
    const surfaceArea = 6 * Math.pow(sideLength, 2);

    return `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
}

console.log(calculateVolumeAndArea(5));    // 'Объем куба: 125, площадь всей поверхности: 150'
console.log(calculateVolumeAndArea(15));   // 'Объем куба: 3375, площадь всей поверхности: 1350'
console.log(calculateVolumeAndArea(15.5)); // 'При вычислении произошла ошибка'
console.log(calculateVolumeAndArea('15')); // 'При вычислении произошла ошибка'
console.log(calculateVolumeAndArea(-15));  // 'При вычислении произошла ошибка'


// 2
function getCoupeNumber(seatNumber) {
    if (typeof seatNumber !== "number" || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (seatNumber <= 0 || seatNumber >= 36) {
        return "Таких мест в вагоне не существует";
    }
    const coupeNumber = Math.ceil(seatNumber / 4);
    return coupeNumber

}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));


// 3
const data = [5, 10, "Shopping", 20, "Homework"];

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
        data[i] *= 2;
    } else if (typeof data[i] === "string") {
        data[i] += " - done";
    }
}

console.log(data)


// 4
const daata = [5, 10, "Shopping", 20, "Homework"];
const reversed_data = [];

for (let i = daata.length - 1; i >= 0; i--) {
    reversed_data.push(daata[i]);
}

console.log(reversed_data);


// 5
function showFamily(family) {
    if (family.length === 0) {
        return 'Семья пуста';
    }

    const message = 'Семья состоит из: ' + family.join(' ');
    return message;
}

console.log(showFamily(['Peter', 'Ann', 'Alex', 'Linda']));
console.log(showFamily([]));


// 6
const restaurantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$',
        },
        {
            name: 'Pizza Diavola',
            price: '9$',
        },
        {
            name: 'Beefsteak',
            price: '17$',
        },
        {
            name: 'Napoleon',
            price: '7$',
        },
    ],
    waitors: [
        { name: 'Alice', age: 22 },
        { name: 'John', age: 24 },
    ],
    averageLunchPrice: '20$',
    openNow: true,
}

function isOpen(prop) {
    let answer = ''
    prop ? (answer = 'Открыто') : (answer = 'Закрыто');

    return answer
}

console.log(isOpen(restaurantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней'
    } else {
        return 'Цена выше средней'
    }
}

console.log(
    isAverageLunchPriceTrue(
        restaurantData.menu[0],
        restaurantData.menu[1],
        restaurantData.averageLunchPrice
    )
)


function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data))
    copy.waitors[0] = { name: "Mike", age: 32 }
    return copy
}

console.log(transferWaitors(restaurantData))


// 6*

function drawStarFigure(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '*'.repeat(i * 2 - 1))
    }
}

drawStarFigure(6)
