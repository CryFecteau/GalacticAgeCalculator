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
    //This will calculate users current age into earth years(for UI purpose only)
    earthCurrentAge(){
        let age = this.calAge();
        let newAge = age / 3.154e+7;
        return newAge.toFixed();
    }
    //Current Age objects will calculate users age in earth years into seconds then muliply it to Planets year differnce and return a whole number for each one
    mercuryCurrentAge() {
        let age = this.calAge();
        let newAge = age / 3.154e+7 * .24 ;
        return newAge.toFixed();
    }
    venusCurrentAge() {
        let age = this.calAge();
        let newAge = age / 3.154e+7 * .62;
        return newAge.toFixed();
    }
    marsCurrentAge() {
        let age = this.calAge();
        let newAge = age / 3.154e+7 * .88;
        return newAge.toFixed();

    }
    jupiterCurrentAge() {
        let age = this.calAge();
        let newAge = age / 3.154e+7 * 11.86;
        return newAge.toFixed();
    }
    //This will determine how long the user has lived or left to live on each plant
    calucatedYears(planet){
        const averageLifespan = 79;
        if(planet === "Mercury"){
            let yearsLeft = averageLifespan * .24 - this.mercuryCurrentAge();
            if(yearsLeft >= 0){
                return "You can live " + yearsLeft.toFixed() + " more years on Mercury";
            }else{
                return "Sorry but you died " + yearsLeft.toFixed() + " years ago on Mercury";
            }
        }else if(planet === "Venus"){
            let yearsLeft = averageLifespan * .62 - this.venusCurrentAge();
            if(yearsLeft >= 0){
                return "You can live " + yearsLeft.toFixed() + " more years on Venus";
            }else{
                return "Sorry but you died " + yearsLeft.toFixed() + " years ago on Venus";
            }
        }else if(planet === "Mars"){
            let yearsLeft = averageLifespan * .88 - this.marsCurrentAge();
            if(yearsLeft >= 0){
                return "You can live " + yearsLeft.toFixed() + " more years on Mars";
            }else{
                return "Sorry but you died " + yearsLeft.toFixed() + " years ago on Mars";
            }
        }else if(planet === "Jupiter"){
            let yearsLeft = averageLifespan * 11.86 - this.jupiterCurrentAge();
            if(yearsLeft >= 0){
                return "You can live " + yearsLeft.toFixed() + " more years on Jupier";
            }else{
                return "Sorry but you died " + yearsLeft.toFixed() + " years ago on Jupiter";
            }
        }
    }
}
export {UserAge}