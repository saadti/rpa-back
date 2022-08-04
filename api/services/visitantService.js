module.exports = (app) => {
    const queryMake = app.connector.query

    const listVisitants = async () => {
        return queryMake.query('SELECT * FROM visitant')
    }

    const addVisitant = async (name, apVisitant, observation = '') => {
        queryMake.query(`INSERT INTO visitant (name, apVisitant, observation) VALUES ("${name}", "${apVisitant}", "${observation}")`)
    }

    return {
        listVisitants, addVisitant
    }
}