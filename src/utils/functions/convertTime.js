export default function convertTime(num) {
  let hours = Math.floor(num / 60);
  let min = num % 60;
  if (hours === 0) {
    return `${min}m`;
  } else {
    return `${hours}h ${min}m`;
  }
}
