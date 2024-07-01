const express = require('express');
const router = express.Router();

const pokeUtilService = require('../services/poke-util-service');
const {generalError,updateCountInvalid,nameEmptyError} = require('../domain/rename-pokemon');

router.get('/', (req,res) => {
    res.status(200).json({
        success: true
    })
})

router.post('/catch', (req, res) => {
    let result = pokeUtilService.catchPokemon();
    if(result.error){
        res.status(500).json({
            status: false,
            message: "Something wrong in the server"
        });       
        return;
    }

    res.status(200).json({
        status: true,
        data: result
    });
});

router.post('/release', (req,res) => {
    let result = pokeUtilService.releasePokemon()
    if(result.error){
        res.status(500).json({
            status: false,
            message: "Something wrong in the server"
        });
        return;
    }
    
    res.status(200).json({
        status: true,
        data: result
    });
});

router.post('/rename', (req,res) => {
    let result = pokeUtilService.renamePokemon(req.body.name, req.body.updateCount);
    if(result.error){
        switch (result.error) {            
            case nameEmptyError: 
                res.status(400).json({
                    status: false,
                    message: "Name is invalid or empty"
                })
                break;
            case updateCountInvalid: 
                res.status(400).json({
                    status: false,
                    message: "Update count is invalid"
                })
                break;
            default: 
                res.status(500).json({
                    status: false,
                    message: "Something wrong in the server"
                })
                break                
        }
        return;
    }

    res.status(200).json({
        status: true,
        data: result
    });
})

module.exports = router;
