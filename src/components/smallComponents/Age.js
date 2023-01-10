export const Age = () => {
  const bDay = `${formatDate(new Date(birthday.birthDate))}`
  const today = new Date()
  const date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
  
  const distance = (bDay.getTime()) - (today.getTime());
  const daysOld = Math.floor(distance / (1000*60*60*24));
  const yearsOld = Number((daysOld/365).toFixed());



  console.log("testing birth date in ListCard:", bDay)
  console.log("testing todays date in ListCard:", today)
  console.log("testing todays date yyyy-mm-dd in ListCard:", date)
  console.log("testing todays date yyyy-mm-dd in ListCard:", yearsOld)
}