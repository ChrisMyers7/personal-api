
var name = {
  name: 'Chris Myers'
}
var location = {
  location: 'Hogwarts'
}
var occupations = ['webDev', 'Wizard', 'Wizard', 'biblo']

var hobbies = [{
    name: 'Ultimate Frisbee',
    type: 'Sport'
  }, {
    name: 'Video Games',
    type: 'Computer'
  }]

var skillz = [{
  id: 1,
  name: "javascript",
  experience: "Intermediate"
},
  {
    id: 2,
    name: "css",
    experience: "basic"
  },{
    id: 3,
    name: "javascript",
    experience: "Intermediate"
  }
]
var secrets = {
  name: 'megatron',
  ssn: 000000000,
  favBook: 'wayOfKings'
}
module.exports = {
  indexName: function(req, res, next) {
    res.status(200).json(name);
  },
  indexLocation: function(req, res, next) {
    res.status(200).json(location);
  },
  indexOccupations: function(req, res, next) {
    if (req.query.order) {
      if (req.query.order === 'desc') {
        res.status(200).json(occupations);
      } else {
        res.status(200).json(occupations.reverse())
      }
    }
    res.status(200).json(occupations);
  },
  indexOccupationsLatest: function(req, res, next) {
    res.status(200).json(occupations[occupations.length -1]);
  },
  indexHobbies: function(req, res, next) {
    res.status(200).json(hobbies);
  },
  indexSkillz: function(req, res, next) {
    if (req.query.experience) {
      if (req.query.experience.toLowerCase() === 'intermediate') {
        var wantedSkills = [];
        for (var i = 0; i < skillz.length; i++) {
          if (skillz[i].experience.toLowerCase() === 'intermediate') {
            wantedSkills.push(skillz[i])
          }
        }
        res.status(200).json(wantedSkills)
      }
    }
    res.status(200).json(skillz);
  },
  indexSecrets: function(req, res, next) {
    if (req.params.username === 'megatron') {
        if (req.params.pin === '1234') {
          res.status(200).json(secrets);
        }
      }
      res.status(404).json({message: 'username/password incorrect'})
  },
  show: function(req, res, next) {
    res.status(200).json(hobbies[req.params.id]);
  },
  updateName: function(req, res, next) {
    name = req.body;
    res.status(200).json(name);
  },
  updateLocation: function(req, res, next) {
    location = req.body
    res.status(200).json(location);
  },
  createHobbies: function(req, res, next) {
    hobbies.push(req.body)
    res.status(200).json(hobbies);
  },
  createOccupations: function(req, res, next) {
    occupations.push(req.body)
    res.status(200).json(occupations);
  },
  createSkillz: function(req, res, next) {
    var newSkill = req.body;
    newSkill.id = skillz.length + 1;
    skillz.push(newSkill);
    res.status(200).json(skillz)
  },
  sendSkills: function() {
    return skillz;
  }
}
