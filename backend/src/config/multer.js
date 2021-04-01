const multer = require('multer')
const path = require('path')
// const bcrypt = require('bcrypt')

module.exports = {
    dest: path.resolve(__dirname, '..', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', 'uploads'))
        },
        filename: (req, file, cb) => {
            const filename = `${Date.now()}-${file.originalname}`
            cb(null, filename)
        }
    }),
    limits: {
        fileSize: 2 *  1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjepg',
            'image/png',
            'image/gif'
        ]
        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        }else {
            cb(new Error("Invalidade file type."))
        }
    },
}