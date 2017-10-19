/**
 * Created by maximiliano.dimito on 4/3/2017.
 */

const Boom = require('boom');
const Person = require('../model/Person');

module.exports = (router,Logger) => {
    router.get("/persons/", async (req, res, next) => {
        try{
            const data = await Person.find({});
            res.status(200);                        
            res.header('X-Total-Count', data.length);
            res.json(data);
        }catch (err) {
            Logger.error(err);
            next(Boom.internal('Finding persons',err));
        }
    });

    router.post("/persons/", async (req, res, next) => {

        let p = new Person();
        p.name = req.body.name;
        p.lastName = req.body.lastName;
        try{
            const savedPerson = await p.save();

            const data = await Person.find({});
            res.json({
                response: savedPerson && true,
                persons: data
            });
        }catch (err){
            Logger.error(err);
            next(Boom.internal('Creating Person',err));
        }

    });

    router.post('/persons/delete', async (req, res, next) => {
        try{
            const deleted = await Person.remove( {_id: req.body._id})

            const data = await Person.find({});
            res.json({
                response:deleted,
                persons: data
            });
        }catch (err){
            Logger.error(err);
            next(Boom.internal('Deleting Person',err));
        }


    });
};





