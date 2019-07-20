const Pet = require('mongoose').model('Pet');
const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Pet.find({})
      .then(pets => res.json(pets))
      .catch(error => res.status(Http.BadRequest).json(error));
  },
  create(req, res) {
    Pet.create(req.body)
      .then(pet => res.json(pet))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  show(req, res) {
    const { pet_id: PetId } = req.params;
    Pet.findById(PetId)
      .then(pet => res.json(pet))
      .catch(error => res.status(Http.NoContent).json(error));
  },
  update(req, res) {
    const { pet_id: PetId } = req.params;
    Pet.findByIdAndUpdate(PetId, req.body)
      .then(pet => res.json(pet))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
destroy(req, res) {
    const { pet_id: PetId } = req.params;
    Pet.findByIdAndRemove(PetId)
      .then(pet => res.json(pet))
      .catch(error => res.status(Http.Conflict).json(error));
  },
};
