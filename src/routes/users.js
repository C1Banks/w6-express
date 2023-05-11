const express = require('express');
const router = express.Router();
const checkPasswordStrength = require('../middleware')
const User = require('../models/User.js');

//app.use( express.json());

router.post('/', checkPasswordStrength, async (request, response, next) => {
    try{//response.send(`This is a ${request.method} method`);
    const user = await User.create(req.body);
    response.send({user: user.username})
    //response.send(users);
    } catch(error){
        next(error);
    }
});

router.get('/', async (req, res, next) =>{
    try{
        const user = await User.findAll({});
        res.send({user});

    } catch(error){
        next(error);
    }
})

    router.get("/:username", async (req, res, next) => {
        try{
            const user = await User.findOne({
                where: {username: req.params.username }
            })
            res.send({user});
        } catch(error){
            next(error);
        }
    })


    router.put("/:username", async (req, res, next) => {
        try{
            const user = await User.update(req.body,{
                where: {username: req.params.username }
            })
            res.sendStatus(200);
        } catch(error){
            next(error);
        }
    })


    router.delete("/:username", async (req, res, next) => {
        try {
          await User.destroy({ where: { username: req.params.username } });
          res.sendStatus(200);
        } catch (error) {
          next(error);
        }
      });


module.exports = router;