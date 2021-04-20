import React from "react";

export function inc(count) {
  return {
    type: "ADD",
    count,
  };
}

export function dec(count) {
  return {
    type: "SUBTRACT",
    count,
  };
}
