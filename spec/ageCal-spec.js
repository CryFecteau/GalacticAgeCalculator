import { UserAge } from './../src/ageCal';
const date = new Date();
const myCurrentAge = new UserAge(date.getFullYear() -25, date.getMonth(), date.getDate());
const newAge = new UserAge(date.getFullYear() - 1, date.getMonth(), date.getDate());
const remainingYears = new UserAge(date.getFullYear()-25, date.getMonth(), date.getDate());
const expiredYears = new UserAge(date.getFullYear()-85, date.getMonth(), date.getDate());

describe('UserAge', function(){
  it('should test to find the users age in seconds', function(){
    let age = newAge;
    expect(age.calAge()).toEqual(3.154e+7);
  });
  it('should return the users age on earth', function(){
    let age = myCurrentAge;
    expect(age.earthCurrentAge()).toEqual('25');
  });
  it('should return the users age in Mercury years', function(){
    let age = newAge;
    expect(age.mercuryCurrentAge()).toEqual('0');
  });
  it('should return the users age in Venus years', function(){
    let age = newAge;
    expect(age.venusCurrentAge()).toEqual('1');
  });
  it('should return the users age in Mars years', function(){
    let age = newAge;
    expect(age.marsCurrentAge()).toEqual('1');
  });
  it('should return the users age in Jupiter years', function(){
    let age = newAge;
    expect(age.jupiterCurrentAge()).toEqual('12');
  });
  it('should return the remaining years on Mercury according to average earth life expectancy', function(){
    let age = remainingYears;
    expect(age.calucatedYears("Mercury")).toEqual('You can live 13 more years on Mercury');
  });
  it('should return the remaining years on Venus according to average earth life expectancy', function(){
    let age = remainingYears;
    expect(age.calucatedYears("Venus")).toEqual('You can live 33 more years on Venus');
   });
  it('should return the remaining years on Mars according to average earth life expectancy', function(){
    let age = remainingYears;
    expect(age.calucatedYears("Mars")).toEqual('You can live 48 more years on Mars');
  });
  it('should return the remaining years on Jupiter according to average earth life expectancy', function(){
    let age = remainingYears;
    expect(age.calucatedYears("Jupiter")).toEqual('You can live 640 more years on Jupiter');
  });
  it('should return when the user died on Mercury according to the average earth life expectancy', function(){
    let age = expiredYears;
    expect(age.calucatedYears("Mercury")).toEqual('Sorry but you died -1 years ago on Mercury');
  });
  it('should return when the user died on Venus according to the average earth life expectancy', function(){
    let age = expiredYears;
    expect(age.calucatedYears("Venus")).toEqual('Sorry but you died -4 years ago on Venus');
   });
  it('should return when the user died on Mars according to the average earth life expectancy', function(){
    let age = expiredYears;
    expect(age.calucatedYears("Mars")).toEqual('Sorry but you died -5 years ago on Mars');
  });
  it('should return when the user died on Jupiter according to the average earth life expectancy', function(){
    let age = expiredYears;
    expect(age.calucatedYears("Jupiter")).toEqual( 'Sorry but you died -71 years ago on Jupiter');
  });
});
