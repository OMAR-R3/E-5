
require('dotenv').config();
class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }
    async conectarMySql(){
        try {
            this.conexion=await this.mysql.createConnection({
                host:process.env.HOSTMYSQL,
                user:process.env.USERMYSQL,
                password:process.env.PASSWORDMYSQL,
                database:process.env.DATABASEMYSQL,
                port:process.env.PORTMYSQL
            });
            
            console.log("conexion creada a mysql bienvenido a telcel");
        } catch (error) {
            console.error("Error al crear la conexion "+error);
        }
    }
    async cerrarConexion(){
        if(this.conexion!=null){
            try {
                await this.conexion.end();
                console.log("Conexion cerrada de Nysql chao");
            } catch (error) {
                console.error("Error al cerar conexion "+error);
            }
        }
    }
}

module.exports=ConectarBD;