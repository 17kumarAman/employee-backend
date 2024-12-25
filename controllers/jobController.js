const Job = require('../models/Job');

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
};

const searchJobs = async (req, res) => {
  const { location } = req.query;
  if (!location) {
    return res.status(400).json({ error: 'Location query is required' });
  }

  try {
    const jobs = await Job.find({ location: { $regex: location, $options: 'i' } });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Error searching jobs' });
  }
};

module.exports = { getAllJobs, searchJobs };
