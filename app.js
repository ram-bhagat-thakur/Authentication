const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/data");
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number
});

const Fruit = mongoose.model("Fruits", fruitSchema);
const item = new Fruit({
    name: "Apple",
    rating: 10
});

const item1 = new Fruit({
    name: "Apple",
    rating: 10
});
const item2 = new Fruit({
    name: "Apple",
    rating: 10
});
const item3 = new Fruit({
    name: "Apple",
    rating: 10
});


async function Updated() {
    try{
    const result=await Fruit.updateMany({rating:6},{rating:10});
    console.log('${result.updateCount}', Updated);
    }
catch(err){
    console.error(err);
}
}

Updated();