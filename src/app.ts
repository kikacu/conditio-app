import express from "express";
import { Server } from "./server";

const server = new Server(process, express());
server.start();
