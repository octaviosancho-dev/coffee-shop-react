  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  
  const actualDate = `${month}/${day}/${year}`;

  export default actualDate;