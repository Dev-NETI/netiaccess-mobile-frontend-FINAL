// middleware/deviceDetection.js

import MobileDetect from "mobile-detect";

export default function deviceDetection(req, res, next) {
  const md = new MobileDetect(req.headers["user-agent"]);
  if (!md.mobile()) {
    // If the device is not mobile, redirect or send an error response
    res.writeHead(302, {
      Location: "/NotSupported",
    });
    res.end();
  } else {
    next();
  }
}
