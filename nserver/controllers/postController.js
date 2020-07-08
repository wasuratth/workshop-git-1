module.exports.index = function (req , res) {
    res.status(200).json("Post");
}

module.exports.createPost = function (req , res) {
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

module.exports.getPostById = function(req , res){
    
    let {id} = req.params ; 
    console.log(`ID : ${id}`);
    res.status(201).send("ID = " + id);
}

module.exports.updatePost =   (req, res) => {
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

module.exports.updatePost =   (req, res) => {
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}

module.exports.deletePost =   (req, res) => {
    console.log("Delete Post..");
    console.log(req.body);
    const {title} = req.body;
    console.log(`Title : ${title}`);
    res.status(201).json(req.body);
}


//module.exports = index ;