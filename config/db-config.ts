import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config({path:`.env.${process.env.NODE_ENV}`});
console.log(process.env.DB_HOST);

export const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
});
class Conn {
   GetOne = async (sql: string, value: any[])=>{
    return new Promise((resolve,reject)=>{
      pool.query(sql,value, (error,results)=>{
            return results ? resolve(results[0]) : reject(error)
          }
      )
    })
  }

    GetList = async (sql: string, value: any[])=>{
        return new Promise((resolve,reject)=>{
            pool.query(sql,value, (error,results)=>{
                    return results ? resolve(results) : reject(error)
                }
            )
        })
    }

    Excute = async (sql: string, value: any[])=>{
        return new Promise((resolve,reject)=>{
            pool.query(sql,value, (error,results)=>{
                    return results ? resolve(results) : reject(error)
                }
            )
        })
    }

}
export default new Conn;

