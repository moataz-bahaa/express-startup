import fs from 'fs';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/files');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export const upload = multer({ storage, fileFilter });

export const clearFile = (url) => {
  if (url?.startsWith('http')) return;
  if (!url?.startsWith('public')) return;

  const filePath = path.resolve(url);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      // throw err;
    }
  });
};
