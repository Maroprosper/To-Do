const backUp = (number, array) => {
  localStorage.setItem('count', number.toString());
  localStorage.setItem('projects', JSON.stringify(array));
};
const restore = () => {
    let number =  parseInt(localStorage.getItem('count'));
    let array = JSON.parse(localStorage.getItem('projects'));
    return {number, array};
}
export {backUp, restore};