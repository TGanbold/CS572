function isWeekend() {
    const todayDate = new Date();
    //const day = todayDate.getDay();
    const day = 0;

   
    switch(day) {
        case 0:
        case 6:
            return "weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "weekday"
    } 


console.log(isWeekend());