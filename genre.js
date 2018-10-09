var mongoose=require('mongoose');
//Product_type
var genreSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Genre=module.exports=mongoose.model('Genre',genreSchema);

//Get Genres
module.exports.getGenres=function(callback , limit){
    Genre.find(callback).limit(limit);
}

//Add Genre
module.exports.addGenres=function(genre ,callback){
    Genre.create(genre,callback);
}

//update Genre
module.exports.updateGenre=function(id , genre,options,callback){
    var query={
        _id:id
    }
    var update={
        name:genre.name
    }
    Genre.findOneAndUpdate(query , update,options,callback);
}

//delete Genre
module.exports.removeGenre=function(id,callback){   
    Genre.findByIdAndRemove(id , callback);
    
}