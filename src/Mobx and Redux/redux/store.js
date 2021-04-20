import React from "react";
import {reducer} from './reducer';
import { createStore } from "redux";

export const store = createStore(reducer);