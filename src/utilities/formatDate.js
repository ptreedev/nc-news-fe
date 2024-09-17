const formatDate = (date) => {
    const formDate = new Date(date);
    const day = formDate.getUTCDate();
    const month = formDate.getUTCMonth() + 1;
    const year = formDate.getFullYear();
    const newDate = `${day}/${month}/${year}`
    return newDate
}

export default formatDate