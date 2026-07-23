import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json([
    { id: "gmail", type: "Gmail", status: "disconnected" },
    { id: "calendar", type: "Calendar", status: "disconnected" },
    { id: "quickbooks", type: "QuickBooks", status: "disconnected" },
    { id: "hubspot", type: "HubSpot", status: "disconnected" },
    { id: "asana", type: "Asana", status: "disconnected" }
  ]);
});

router.post('/:id/connect', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Connected ${id} successfully`,
    integration: { id, type: id, status: "connected" }
  });
});

export default router;
