const prisma = require("../prisma");
const bcrypt = require("bcrypt");

module.exports.signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.user.create(
            {
                data: {
                    email,
                    password: hashedPassword,
                    name
                }
            }
        );
        res.status(200).json("Signed up successfully");
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        await bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                res.status(400).json("Invalid credentials");
                return;
            }
        });
        const session = await prisma.session.create({
            data: {
                userId: user.id,
                startTime: new Date(),
            }
        });
        res.cookie("session", session.id, { httpOnly: true, expires: new Date(Date.now() + 1000 * 60 * 60) });
        res.status(200).json("Login successful");
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }
}

module.exports.logout = async (req, res) => {
    try {
        res.clearCookie("session");
        res.status(200).json("Logout successful");
    }
    catch (err) {
        res.status(400).json("Error: " + err);
    }
}
