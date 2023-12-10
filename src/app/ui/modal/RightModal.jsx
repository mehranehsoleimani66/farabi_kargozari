" use client";

import { useState } from "react";
import Circle from "./Circle";
import Modal from "./Modal";
const RightModal = () => {
  const [open, SetOpen] = useState(false);

  return (
    <div className="pr-3 pb-3">
      <Circle />
      <Modal />
      {open && <Modal />}
    </div>
  );
};

export default RightModal;
