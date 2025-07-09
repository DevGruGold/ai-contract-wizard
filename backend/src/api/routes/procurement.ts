import express from 'express';
import { TrustScoreboardService } from '../../services/trustScoreboard';
import { TransformersService } from '../../services/transformers';

const router = express.Router();
const trustService = new TrustScoreboardService();
const transformersService = new TransformersService();

// Get trust scores
router.get('/trust-scores', async (req, res) => {
  try {
    const scores = await trustService.getVendorTrustScores();
    res.json({ success: true, data: scores });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to get trust scores' });
  }
});

// Analyze document
router.post('/analyze-document', async (req, res) => {
  try {
    const { content } = req.body;
    const analysis = await transformersService.analyzeDocument(content);
    res.json({ success: true, data: analysis });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to analyze document' });
  }
});

// Get contracts
router.get('/contracts', (req, res) => {
  const contracts = [
    {
      id: '1',
      title: 'IT Infrastructure Modernization',
      department: 'Technology',
      budget: 2500000,
      status: 'evaluation',
      deadline: '2025-02-15',
      vendorCount: 8,
      complianceScore: 92,
      trustScore: 87
    },
    {
      id: '2',
      title: 'Office Supplies Annual Contract',
      department: 'Administration',
      budget: 150000,
      status: 'bidding',
      deadline: '2025-01-30',
      vendorCount: 12,
      complianceScore: 98,
      trustScore: 94
    }
  ];
  res.json({ success: true, data: contracts });
});

// Get vendors
router.get('/vendors', (req, res) => {
  const vendors = [
    {
      id: '1',
      name: 'TechCorp Solutions',
      trustScore: 87,
      complianceStatus: 'compliant',
      performanceRating: 4.8,
      contractsCompleted: 23
    },
    {
      id: '2',
      name: 'Global Office Supplies',
      trustScore: 94,
      complianceStatus: 'compliant',
      performanceRating: 4.9,
      contractsCompleted: 156
    }
  ];
  res.json({ success: true, data: vendors });
});

export default router;

