import { Router } from "express";
import {
  ingresarMovimiento,
  obtenerMovimiento
} from "../metodos";

const router = Router();

router.post("/ingresar", ingresarMovimiento);
router.get("/obtener", obtenerMovimiento);
// router.delete("/eliminar/:valor", eliminarMovimiento);

export default router;
