/* eslint-disable react/prop-types */
import React from "react";
import {
    Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import Image from "next/image";
``
export default function YesDialog({ dialogOpen }) {
  return (
    <div>
      <Dialog open={dialogOpen}>
        <DialogTitle>
          Get Your Dancing Shoes Ready and we&apos;ll see you soon!
        </DialogTitle>
        <DialogContent>
          <Image
            src="/wedding-crashers.gif"
            alt="wedding crashers"
            height={355}
            width={480}
          />
        </DialogContent>
        <DialogActions>
            <Button href="/faqs">FAQ&apos;s</Button>
            <Button href="/">Return to HomePage</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
