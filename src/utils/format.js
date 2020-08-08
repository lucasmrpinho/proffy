const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]


function getSubject(subjectNumber){
    const position = (+subjectNumber - 1)
    return subjects[position]
}

function getLocal(classType){
    if (classType == 'ead'){
        return "À distância (online)"
    }
    if (classType == 'presential'){
        return "Presencial"
    }
    if (classType == 'both'){
        return "Presencial ou EAD"
    }
}

function convertHourToMinutes (time) {
    const [hour, minutes] = time.split(':')
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    getLocal,
    convertHourToMinutes
}
