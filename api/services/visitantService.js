module.exports = (app) => {
    const pool = app.connector.db

    const listVisitants = async () => {
        let conn
        try {
            conn = await pool.getConnection()

            let sql = `SELECT * FROM visitant`
            let result = await conn.query(sql)

            return result
        } catch (error) {
            throw error
        } finally {
            if (conn) {
                conn.release()
            }
        }
    }

    return {
        listVisitants
    }
}