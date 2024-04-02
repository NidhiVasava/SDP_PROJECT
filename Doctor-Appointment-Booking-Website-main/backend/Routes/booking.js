/*const express = require('express');
const router = express.Router();
const { createCheckoutSession } = require('../Controllers/bookingController'); // Import the createCheckoutSession function from your controller

// POST /api/v1/checkout-session
router.post('/checkout-session', async (req, res) => {
  const { doctorId, ticketPrice } = req.body;

  try {
    const session = await createCheckoutSession(doctorId, ticketPrice);
    res.json({ session });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;*/
import express from 'express'
import { authenticate } from './../auth/verifyToken.js'
import {getCheckoutSession} from '../Controllers/bookingController.js'

const router = express.Router();
router.post('/checkout-session/:doctorId',authenticate,getCheckoutSession)

export default router