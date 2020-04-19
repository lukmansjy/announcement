exports.toDateName = (dateMiliSec) =>{
    const d = new Date(dateMiliSec)
    const monthList = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    const monthName = monthList[d.getMonth()]

    return `${d.getDate()} ${monthName} ${d.getFullYear()}`
}

exports.getHourStartEnd = (dateMiliSecStart, dateMiliSecEnd) => {
    const dateStart = new Date(dateMiliSecStart)
    const dateEnd = new Date(dateMiliSecEnd)

    return `${( '0' + dateStart.getHours() ).slice(-2)}.${( '0' + dateStart.getMinutes() ).slice(-2)} - ${( '0' + dateEnd.getHours() ).slice(-2)}.${( '0' + dateEnd.getMinutes() ).slice(-2)}`
}