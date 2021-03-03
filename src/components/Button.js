import React, { useState, useEffect, useHistory } from "react";

function Button({order, id}) {
  return (
    <>
      <button id={id}>{order}</button>
    </>
  );
}

export default Button