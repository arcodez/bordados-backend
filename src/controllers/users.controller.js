let controller = {}


controller.createUser = (req, res) => {
    let user = new User()
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
    user.save((err, userStored) => {
        if (err) {
            res.status(500).send({
                message: `Error al guardar el usuario: ${err}`
            })
        } else {
            if (!userStored) {
                res.status(404).send({
                    message: `No se ha podido guardar el usuario`
                })
            } else {
                res.status(200).send({
                    user: userStored
                })
            }
        }
    })
}

controller.UpdateUser = () => {

}

controller.deleteUserById = () => {

}


controller.deleteAllUser = () => {}


module.exports = controller
