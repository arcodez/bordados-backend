let controller = { }

controller.index = (req, res) => { 
    res.send('Hello World')
}

// export controller 
module.exports = controller