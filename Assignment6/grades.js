const express = require('express');
const {
    body,
    validationResult
} = require('express-validator/check');
const router = express.Router();

const grades = require('../GradesData');

router.get('/:id', (req, res) => {
    grades.getGradeById(req.params.id)
        .then(grade => res.status(200).json(grade))
        .catch(err => {
            console.error(err);
            res.status(404).json({
                err
            });
        });
});

router.get('/', (req, res) => {
    grades.getAllGrades()
        .then(grades => {
            if (grades.length == 0) {
                res.status(204).json({});
            } else {
                res.status(200).json(grades);
            }
        });
});

router.post('/', [
    body("id").isNumeric(),
    body("name").exists(),
    body("course").exists(),
    body("grade").isNumeric()
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    grades.addGrade({
            id: req.body.id,
            name: req.body.name,
            course: req.body.course,
            grade: req.body.grade
        })
        .then(result => res.status(200).json({
            result
        }));
});

router.put('/:id', [
    body("id", "id field must be numeric and should match request param")
    .isNumeric()
    .custom((value, {
        req
    }) => value == req.params.id),
    body("name").exists(),
    body("course").exists(),
    body("grade").isNumeric()
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    
router.delete('/:id', (req, res) => {
    grades.removeGrade(req.params.id)
        .then(result => res.status(200).json({
            result
        }))
        .catch(err => {
            console.error(err);
            res.status(404).json({
                err
            });
        })
});

module.exports = router;