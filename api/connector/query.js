module.exports = app => {
    const pool = app.connector.db

    const query = async (query) => {
        let conn
        try {
            conn = await pool.getConnection()

            let sql = query
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
        query
    }
}
