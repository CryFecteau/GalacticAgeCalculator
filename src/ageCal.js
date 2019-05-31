//This class will hold the required information for the users age to be calculated
class UserAge {
    //This constructor will set the object value for year, month, and day
    constructor(year, month, day){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    //This will calculate how old the user is on earth from the info they inputted into a seconds for each year, month, and day then add everything together
    calAge() {
        const date = new Date();
        let userYear = (date.getFullYear() - this.year) * 3.154e+7;
        let userMonth = (date.getMonth() - this.month) * 2.628e+6;
        let userDay = (date.getDate() - this.day) * 86400;
        return userYear + userMonth + userDay;
    }
    //This will calculate users earth years of age in seconds to Mercurys years in seconds
    mercuryCurrentAge() {
        let age = this.calAge();
        return age / 3.154e+7 * .24;
    }
    //This will calculate users earth years of age in seconds to Venus years in seconds
    venusCurrentAge() {
        let age = this.calAge();
        return age / 3.154e+7 * .62;
    }
    //This will calculate users earth years of age in seconds to Mars years in seconds
    marsCurrentAge() {
        let age = this.calAge();
        return age / 3.154e+7 * .88;
    }
    //This will calculate users earth years of age in seconds to Jupiter years in seconds
    jupiterCurrentAge() {
        let age = this.calAge();
        return age / 3.154e+7 * 11.86;
    }
    //This will determine how long the user has lived or left to live on each plant
    calucatedYears(planet){
        const averageLifespan = 79;
        if(planet === "Mercury"){
            let yearsLeft = averageLifespan * .24 - this.mercuryCurrentAge();
            
        }
    }
}