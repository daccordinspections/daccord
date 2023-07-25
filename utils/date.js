function formatDate(dateVar){

    const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const monthName=months[dateVar.getMonth()];

    const formatedDate = monthName + " " + dateVar.getDate() + ", " + dateVar.getFullYear();

    return formatedDate
}

module.exports = formatDate;