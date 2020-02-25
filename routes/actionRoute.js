const express = "express";
const router = require("express").Router();

const data = require("../data/helpers/actionModel");

const { validateActionId } = require("../middleware/validateActionID");

//CREATE ACTION
router.post("/", (req, res) => {
  if (!req.body.project_id) {
    res.status(404).json({ message: "Don't forget to add a project id." });
  } else {
    data
      .insert(req.body)
      .then(action => {
        res.status(201).json(action);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ errorMessage: "There was an error creating that action." });
      });
  }
});

// GET ACTIONS BY ID
router.get("/:id", validateActionId, (req, res) => {
  id = req.params.id;
  data
    .get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "There was an error retrieving that action."
      });
    });
});

//UPDATE ACTION BY ID
router.put("/:id", validateActionId, (req, res) => {
  id = req.params.id;
  data
    .update(id, req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "There was an error updating that action." });
    });
});

//DELETE ACTION BY ID
router.delete("/:id", validateActionId, (req, res) => {
  id = req.params.id;
  data
    .remove(id)
    .then(() => {
      res
        .status(200)
        .json({ message: `Action #${req.params.id} was deleted.` });
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "There was an error deleting that action." });
    });
});

module.exports = router;
