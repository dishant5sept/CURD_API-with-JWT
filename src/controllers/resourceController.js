const { Resource } = require('../models');

exports.getAllResources = async (req, res, next) => {
  try {
    const resources = await Resource.findAll();
    res.json(resources);
  } catch (error) {
    next(error);
  }
};

exports.createResource = async (req, res, next) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (error) {
    next(error);
  }
};

exports.updateResource = async (req, res, next) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    await resource.update(req.body);
    res.json(resource);
  } catch (error) {
    next(error);
  }
};

exports.deleteResource = async (req, res, next) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    await resource.destroy();
    res.json({ message: 'Resource deleted successfully' });
  } catch (error) {
    next(error);
  }
};
