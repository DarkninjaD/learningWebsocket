import express from "express";
import expressWs from "express-ws";
const server = expressWs(express());
export default server;
