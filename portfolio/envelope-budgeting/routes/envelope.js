const express = require('express')
const router = express.Router()

const {
  getAllEnvelopes,
  getEnvelopeById,
  addEnvelope,
  deleteEnvelope,
  updateEnvelope,
  transfer,
} = require("../controllers/envelope");



router.get('/', getAllEnvelopes)
router.get('/:id', getEnvelopeById)
router.post('/', addEnvelope)
router.put('/:id', updateEnvelope)
router.delete('/:id', deleteEnvelope)
router.post('/:sourceId/transfer/:targetId', transfer)

module.exports = router;