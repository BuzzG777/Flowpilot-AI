import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({
    message: "Login successful",
    user: { id: "1", email, name: "FlowPilot User" },
    token: "mock-jwt-token"
  });
});

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  res.status(200).json({
    message: "Signup successful",
    user: { id: "1", email, name: name || "FlowPilot User" },
    token: "mock-jwt-token"
  });
});

export default router;
