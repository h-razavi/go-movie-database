export default function convertTime(num){
    let hours = Math.floor(num/60);
    let min = num % 60;
    return `${hours}h ${min}m`
}