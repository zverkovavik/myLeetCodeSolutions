/* На вход приходит массив с названиями фруктов, нужно вернуть массив с уникальными значениями, 
отсортированными в порядке встречаемости этих фруктов в массиве, пришедшем на вход */

const getSortedFruitArray = (array) => {
    const unique = new Set(array);
    const counter = {};
    unique.forEach((element) => {
    counter[element] = array.filter((el) => el === element).length;
    });
    return Object.keys(counter).sort((a, b) => counter[b] - counter[a]);
};

getSortedFruitArray(['b', 'b', 'b', 'b', 'a', 'a', 'c', 'c', 'd', 'a', 'c', 'c', 'd', 'd', 'd', 'd', 'd', 'b', 'b', 'b']);
