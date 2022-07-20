import PropTypes from "prop-types";
import React, { Component } from "react";
import connectDB from "../../../middleware/mongodb";
import Product from "../../../models/product";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      const details = await Product.findById(id);
      res.status(200).send(details);
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
