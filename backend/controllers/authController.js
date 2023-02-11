const prisma = require("../prisma");

module.exports.signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.user.create(
            {
                data: {
                    email,
                    hashedPassword,
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
        const auth = await bcrypt.compare(password, user.hashedPassword);
        if (!auth) {
            res.status(400).json("Invalid credentials");
        }
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
