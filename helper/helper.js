const calculate = (ownName, loverName) => {
    ownName = ownName.toLowerCase();
    loverName = loverName.toLowerCase();
    ownName = ownName.split(" ").join("")
    loverName = loverName.split(" ").join("")
    let similarCount = 0;
    let lovePercentage = 0
    for (let i = 0; i < ownName.length; i++) {
        for(let j = 0;j<loverName.length;j++){
            if (ownName[i] === loverName[j]) {
                similarCount++;
                lovePercentage += 10; // You can adjust this percentage as needed
            }
        }
    }
    const percentage = Math.min(lovePercentage, 100); // Ensure the maximum percentage is 100

    return  percentage;
}

module.exports = calculate