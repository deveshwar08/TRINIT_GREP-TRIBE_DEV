module.exports = async (req, res, next) => {
    const { session } = req.cookies;
    try {
        const sessionEntity = await prisma.session.findUnique({
            where: {
                sessionId: session,
            }
        });
        if (!sessionEntity || sessionEntity.endTime > new Date()) {
            res.cookies.clear("session");
            res.status(400).json("Unauthorized");
        } else {
            next();
        }
    } catch (err) {
        res.status(500).json("Internal server error");
    }
};
