/**
 * Created by maximiliano.dimito on 4/4/2017.
 */
const Asistance = require('../model/Asistance');
const Boom = require('boom');

module.exports =  (router,Logger) => {

    router.get('/asistances/', async (req, res, next) => {
        try{
            const data = await Asistance.find({}).populate('person');
            if(data){
                res.json({
                    response:true,
                    asistances:data
                });
            }else{
                res.json({
                    response:false
                });
            }
        }catch (err){
            Logger.error(err);
            next(Boom.internal('Finding asistances',err));
        }


    });

    router.get('/asistances/:date', async (req, res, next) => {
        const stringDate = req.params.date;
        try {
            const data = await Asistance.find({date: stringDate}).populate("person");
            if (data) {
                res.json({
                    response: true,
                    asistances: data
                });
            } else {
                res.json({response: false});
            }
        } catch (err) {
            Logger.error(err);
            res.json(Boom.internal('Finding asistance by date',err));
        }

    });

    router.post("/asistances/delete", async (req, res, next) => {
        const id = req.body.asistance._id;
        try {
            const deleted = await Asistance.findOneAndRemove({_id: id});
            const data = await Asistance.find({date: req.body.asistance.date}).populate("person");
            if (data) {
                res.json({
                    response: deleted,
                    asistances: data
                });
            }
        } catch (err) {
            Logger.error(err);
            next(Boom.internal('Deleting asistance',err));
        }

    });


    router.post("/asistances/", async (req,res, next) => {
        let response = false;
        const a = new Asistance();
        a.date = req.body.date;
        a.person = req.body.person._id;

        try {
            const savedAsistance = await a.save();
            if (savedAsistance) {
                response = true
            }

            const data = await Asistance.find({date: req.body.date}).populate("person");
            if (data) {
                res.json({
                    response: response,
                    asistances: data
                });
            }
        } catch (err) {
            Logger.error(err);
            next(Boom.internal('Creating asistance',err));
        }

    });


}
