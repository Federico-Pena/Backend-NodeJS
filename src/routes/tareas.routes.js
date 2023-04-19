const express = require('express')
const router = express.Router()

const Tarea = require("../models/tarea")


router.get('/', async (req, res) => {
  //pedir datos a DB
  const tareas = await Tarea.find()
  res.json(tareas)
})
//buscar una sola tarea
router.get('/:id', async (req, res) => {
  const tarea = await Tarea.findById(req.params.id)
  res.json(tarea)
})


//guardar datos en BD
router.post("/", async (req, res) => {
  //crear modelo de datos con los datos del servidor
  const { titulo, descripcion } = req.body
  const tarea = new Tarea({ titulo, descripcion })
  //guardarlos en DB
  await tarea.save()
  res.json("tarea guardada")
})


//actualizar datos en BD
router.put("/:id", async (req, res) => {
  //crear modelo de datos con los datos del servidor
  const { titulo, descripcion } = req.body
  const tarea = { titulo, descripcion }
  //Buscarlos en DB
  await Tarea.findByIdAndUpdate(req.params.id, tarea)
  res.send("tarea actualizada")
})

//Eliminar datos en BD
router.delete("/:id", async (req, res) => {
  //buscar datos por id
  await Tarea.findByIdAndRemove(req.params.id)


  res.send("tarea eliminada")
})

















module.exports = router