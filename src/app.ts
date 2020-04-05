import express from "express";
import { Server } from "./http/server";

const server = new Server(process, express());
server.start();
