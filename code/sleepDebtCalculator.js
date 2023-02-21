const getSleepDays = day => {
    if (day === "lundi") {
        return 8;
    } else if (day === "mardi") {
        return 8;
    } else if (day === "mercredi") {
        return 8;
    } else if (day === "jeudi") {
        return 8;
    } else if (day === "vendredi") {
        return 8;
    } else if (day === "samedi") {
        return 8;
    } else if (day === "dimanche") {
        return 8;
    } else {
        return "No sleep for me!";
    }
}

const getActualSleepHours = () =>
    getSleepDays("lundi") + getSleepDays("mardi") + getSleepDays("mercredi") + getSleepDays("jeudi") + getSleepDays("vendredi") + getSleepDays("samedi") + getSleepDays("dimanche");

    const getIdealSleepHours = () => {
        const idealHours = 10;
        return idealHours * 7;
    }

    const calculateSleepDebt = () => {
        const actualSleepHours = getActualSleepHours();
        const idealSleepHours = getIdealSleepHours();
      
        if (actualSleepHours === idealSleepHours) {
          console.log("Nice work. You got perfect amount of sleep");
        }
        if (actualSleepHours > idealSleepHours) {
          console.log("User got more sleep than needed");
        }
        if (actualSleepHours < idealSleepHours) {
          console.log("Not getting enough sleep. Rest up!");
        }
      }
      
      calculateSleepDebt();