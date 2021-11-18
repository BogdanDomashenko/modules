const path = require('path')

console.log(__filename); //шлях до поточного файлу
console.log(path.basename(__filename)); //назва поточного файлу
console.log(path.dirname(__filename)); // шлах до директорії з поточним файлом
console.log(path.extname(__filename)); // розширення поточного файлу

console.log(path.parse(__filename)); // інформація про поточний файл

console.log(path.join(__dirname, 'test', 'secound.html')); //з'єднання аргументів в єдиний шлях
console.log(path.resolve(__dirname, './test', 'secound.html')) //створює з аргументів абсолютний шлях

