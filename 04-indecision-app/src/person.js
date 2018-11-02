const isAdult = (age) => age > 17;
const canDriing = (age) => age > 20;
// export const canDriing = (age) => age > 20;
const isSenior = (age => age >= 65);

export {isAdult, canDriing, isSenior as default};
// export default isAdult;