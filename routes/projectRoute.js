const express = "express";
const router = require("express").Router();

const data = require("../data/helpers/projectModel");

const { validateProjectId } = require("../middleware/validateProjectID");

// GET PROJECTS
router.get("/", (req, res) => {
  data
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "There was an error retrieving the projects."
      });
    });
});

// GET PROJECT BY ID
router.get("/:id", validateProjectId, (req, res) => {
  data
    .get(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "There was a problem retrieving that project." });
    });
});

//GET PROJECT'S ACTIONS
router.get("/:id/actions", validateProjectId, (req, res) => {
  data
    .getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "There was a problem getting project actions." });
    });
});

//ADD PROJECT
router.post("/", (req, res) => {
  data
    .insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "There was an error creating the project." });
    });
});

//UPDATE PROJECT BY ID
router.put("/:id", validateProjectId, (req, res) => {
  data
    .update(req.params.id, req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "There was an error updating that project." });
    });
});

//DELETE PROJECT
router.delete("/:id", validateProjectId, (req, res) => {
  data
    .remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: `Project #${req.params.id} was deleted.`
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "There was a problem deleting that project."
      });
    });
});

module.exports = router;
