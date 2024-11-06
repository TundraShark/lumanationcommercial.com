#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
// import { Lumanation } from "./stack";
import { Lumanation2 } from "./stack-2";

// const app = new cdk.App();
// new Lumanation(app, "Lumanation", {});

const app2 = new cdk.App();
new Lumanation2(app2, "Lumanation2", {});
