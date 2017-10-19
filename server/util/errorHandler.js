/**
 * Created by maximiliano.dimito on 4/4/2017.
 */
module.exports = (err, req, res, next) => {
    if(err){
        res.json(err);
    }else{
        res.status(500).json({message: 'unexpected error'});
    }

}