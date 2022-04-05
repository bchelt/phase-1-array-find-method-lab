// code your solution here
function superbowlWin(array) {
    let element =  array.find((element) => element.result === "W" ? true : false);
    if (element)
        return element.year;
}