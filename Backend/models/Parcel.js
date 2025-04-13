const mongoose = require("mongoose");

const ParcelSchema = mongoose.Schema({

    from:{type:String, require: true},
    to:{type:String, require: true},
    sendername:{type:String, require: true},
    recipientname:{type:String, require: true},
    sendermail:{type:String, require: true},
    sendermail:{type:String, require: true},
    recipientemail:{type:String, require: true},
    weight:{type:Number, require: true},
    cost:{type:Number, require: true},
    date:{type:String, require: true},
    note:{type:String},
    feedback:{type:String},
    status:{type:String, default:0},
    
 

},{
    Timestamp:true
})
module.exports = mongoose.model("Parcel", ParcelSchema)