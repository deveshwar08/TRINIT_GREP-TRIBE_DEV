const prisma = require("../prisma");

module.exports = async (req, res, next) => {
    const { session } = req.cookies;
    try {
        const sessionEntity = await prisma.session.findUniqueOrThrow({
            where: {
                id: parseInt(session),
            }
        });
        if (!sessionEntity
            || sessionEntity.startTime < new Date(Date.now() - (60 * 60 * 1000))
        ) {
            res.status(400).json("Unauthorized");
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
};
