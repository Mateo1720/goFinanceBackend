import { connect } from "./database";


export const obtenerMovimiento = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM movimientos");
    console.log(rows);
    res.json(rows);
  };

export const ingresarMovimiento = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query(
      "INSERT INTO movimientos(tipo, valor) VALUES(?,?)",
      [req.body.tipo, req.body.valor]
    );
    res.json({
      id: results.insertId,
      ...req.body,
    });
  };

// export const eliminarMovimiento = async (req, res) => {
//     const connection = await connect();
//     await connection.query("DELETE FROM movimientos WHERE valor = ?", [req.params.valor]);
//     res.sendStatus(204);
//   };