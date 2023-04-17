const { Author } = require('../models/author.model');

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
    .then(author => {
            console.log("Creating new author:", author)
            response.json(author)
        })
        .catch(err => {
            response.status(400).json(err)
            console.log(err)
        });
}

module.exports.getAllAuthors = (request, response) => {
    Author.find().sort({"name": 1})
        .then((allAuthors) => {
			console.log("Running query to find all authors:", allAuthors)
			response.json(allAuthors)
		})
        .catch(err => {
            console.log(err)
            response.status(400).json(err)
        })
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => {
            console.log("Running query to find one author:", author)
            response.json(author)
        })
        .catch(err => {
            console.log(err)
            response.status(400).json(err)
        })
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators:true}, {new:true})
        .then(updatedAuthor => {
            console.log("Updating author:", updatedAuthor)
            response.json(updatedAuthor)
        })
        .catch(err => {
            console.log(err)
            response.status(400).json(err)
        })
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => {
            console.log("Deleting from database author", request.params.id)
            response.json(deleteConfirmation)
        })
        .catch(err => {
            console.log(err)
            response.status(400).json(err)
        })
}





