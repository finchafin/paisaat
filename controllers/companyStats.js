const { json } = require("body-parser");
const fs = require("fs");

const path = require("path");

exports.getCompanyStats = (req, res, next) => {
  const name = req.params.name;

  const p = path.join(
    path.dirname(process.mainModule.filename),
    "FinancialData",
    "CompanyStats",
    `${name}.json`
  );

  fs.readFile(p, (err, data) => {

    if(err) {
      console.log(err);
      res.status(400).json({msg: "fileread failed", err: err});
    } else  {
      data = JSON.parse(data);
      res.status(201).json(data);
    }
  })
};

exports.getBonds = (req, res, next) => {
  const bp = path.join(
    path.dirname(process.mainModule.filename),
    "FinancialData",
    "Bonds",
    'bonds.json'
  );

  fs.readFile(bp, (err, data) => {
    if(err) {
      console.log(err);
      res.status(400).json({msg: "reading file failed", err: err});
    } else {
      data = JSON.parse(data);
      res.status(201).json(data);
    }
  });
};


exports.getPropertiesData = (req, res, next) => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "FinancialData",
    "Realestate",
    'properties.json'
  );

  fs.readFile(p, (err, data) => {
    if(err) {
      console.log(err);
      res.status(400).json({msg: "reading file failed", err: err});
    } else {
      data = JSON.parse(data);
      res.status(201).json(data);
    }
  });
};

exports.getCryptoData = (req, res, next) => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "FinancialData",
    "Crypto",
    'crypto.json'
  );

  fs.readFile(p, (err, data) => {
    if(err) {
      console.log(err);
      res.status(400).json({msg: "reading file failed", err: err});
    } else {
      data = JSON.parse(data);
      res.status(201).json(data);
    }
  });
};

exports.getFDdata = (req, res, next) => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "FinancialData",
    "FixedDeposit",
    'fd.json'
  );

  fs.readFile(p, (err, data) => {
    if(err) {
      console.log(err);
      res.status(400).json({msg: "reading file failed", err: err});
    } else {
      data = JSON.parse(data);
      res.status(201).json(data);
    }
  });
}

exports.getCommodities = (req, res, next) => {
  console.log('requesting commodities');
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "FinancialData",
    "Commodities",
    'Commodities.json'
  );

  fs.readFile(p, (err, data) => {
    if(err) {
      console.log(err);
      res.status(400).json({msg: "reading file failed", err: err});
    } else {
      data = JSON.parse(data);
      res.status(201).json(data);
    }
  });
}

exports.getMutualFunds = (req, res, next) => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "FinancialData",
    "MutualFunds",
    'mutualFunds.json'
  );

  fs.readFile(p, (err, data) => {
    if(err) {
      console.log(err);
      res.status(400).json({msg: "reading file failed", err: err});
    } else {
      data = JSON.parse(data);
      res.status(201).json(data);
    }
  });
};