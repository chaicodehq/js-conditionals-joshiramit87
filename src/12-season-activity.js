/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 * 
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 * 
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 * 
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {

    if(typeof month!=="number") return null;
    if(typeof temperature!=="number") return null;

    let yearArray = [1,2,3,4,5,6,7,8,9,10,11,12];
    if(!yearArray.includes(month)) return null;

    let winterArray= [12,1,2];
    let springArray= [3, 4, 5];
    let summerArray= [6, 7, 8];
    let autumnArray= [9, 10, 11];
    


    let season = "";
    let activity = "";

    if(winterArray.includes(month)) {
        season = "Winter";
    } else if(springArray.includes(month)) {
        season = "Spring";
    } else if(summerArray.includes(month)) {
        season = "Summer";
    } else if(autumnArray.includes(month)) {
        season = "Autumn";
    } 
 
    if(season=="Winter" && temperature < 0) {
        activity="skiing";
    } else if(season=="Winter" && temperature >= 0) {
        activity="ice skating";
    } else if(season=="Spring" && temperature > 20 )  { 
        activity="hiking"; 
    } else if(season=="Spring" && temperature <= 20) { 
        activity="museum visit";
    } else if(season=="Summer" && temperature > 35) { 
        activity="swimming";
    } else if(season=="Summer" && temperature <= 35) { 
        activity="cycling";
    } else if(season=="Autumn" && temperature > 15) { 
        activity="nature walk";
    } else if(season=="Autumn" && temperature <= 15) { 
        activity="reading at a cafe";
    }

    return season!="" && activity!=""  ? { season, activity } :null; 

    


}
