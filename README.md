# API REST - CRUD
    Esta Api lista, crea, edita y elimina la tabla de lenguajes de una base de datos Mysql
    para mostrar en portafolio, La BD esta alojada en una instancia de AWS(Aurora And RDS)

## Node Js + Express
*  **Cors:** Se aplican Midleware para validar que la Api se consumida de URLs especificas
*  **Express:** Uso de Express para facilitar el uso de los verbos
*  **Mysql2:** Para la conexion a la Base de datos y extrar y guardar información en MySQL
/*
 * @api {get} /languages Obtener todos los lenguajes
 * @apiDescription Recupera la lista de todos los lenguajes activos almacenados en la base de datos MySQL.
 * @apiSuccess {Object[]} languages Lista de objetos de lenguajes.
 *
 * @api {post} /languages Agregar un nuevo lenguaje
 * @apiDescription Agrega un nuevo lenguaje a la base de datos MySQL.
 * @apiSuccess {Object} language Objeto del lenguaje agregado.
 *
 * @api {put} /languages/:id Editar un lenguaje existente
 * @apiDescription Edita la información de un lenguaje existente en la base de datos MySQL.
 * @apiSuccess {Object} language Objeto del lenguaje actualizado.
 *
 * @api {delete} /languages/:id Eliminar un lenguaje
 * @apiDescription Elimina un lenguaje de la base de datos MySQL por su identificador.
 * @apiParam {Number} id Identificador único del lenguaje.
 * @apiSuccess {String} message Mensaje de confirmación de eliminación.
 */