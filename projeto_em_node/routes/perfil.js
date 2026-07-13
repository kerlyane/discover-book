const express = require("express");
const router = express.Router();
const db = require("../database/db");
const multer = require("multer");
const path = require("path");

function autenticado(req, res, next) {
    if (req.session && req.session.usuario_id) {
        return next();
    }

    res.redirect("/login");
}

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "public/uploads");
    },

    filename(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get("/perfil", autenticado, (req, res) => {

    db.get(
        "SELECT * FROM usuarios WHERE id = ?",
        [req.session.usuario_id],
        (err, usuario) => {

            if (err || !usuario) {
                return res.redirect("/home");
            }

            res.render("perfil", {
                usuarioLogado: usuario
            });

        }
    );

});

router.post("/perfil", autenticado, upload.single("foto"), (req, res) => {

    const { username, bio } = req.body;

    let foto = null;

    if (req.file) {
        foto = "/uploads/" + req.file.filename;
    }

    if (foto) {

        db.run(
            `UPDATE usuarios
             SET username = ?,
                 bio = ?,
                 foto = ?
             WHERE id = ?`,

            [
                username,
                bio,
                foto,
                req.session.usuario_id
            ],

            function (err) {

                if (err) return res.redirect("/perfil");

                req.session.usuario_foto = foto;

                res.redirect("/perfil");

            }

        );

    } else {

        db.run(
            `UPDATE usuarios
             SET username = ?,
                 bio = ?
             WHERE id = ?`,

            [
                username,
                bio,
                req.session.usuario_id
            ],

            function (err) {

                if (err) return res.redirect("/perfil");

                res.redirect("/perfil");

            }

        );

    }

});

module.exports = router;