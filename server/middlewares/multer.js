
import multer from "multer";
import { v4 as uuid } from 'uuid';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads");
  },
  filename(req, file, cb) {
    const id = uuid();
    const extName = file.originalname.split(".").pop();
    const filename = `${id}.${extName}`;
    cb(null, filename);
  },
});

export const uploadFiles=multer({storage}).single("file");


// const upload = multer({ storage });

// export const uploadFiles = (req, res, next) => {
//   const uploadSingle = upload.single("file");

//   uploadSingle(req, res, (err) => {
//     if (err) {
//       console.error("Multer Error:", err);
//       return res.status(400).json({ message: "File upload failed", error: err.message });
//     }

//     console.log("Uploaded File:", req.file); 
//     next();
//   });
// };
