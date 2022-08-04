module.exports = (app) => {
    const visitantService = app.services.visitantService;
    const visitantController = {};
    
    visitantController.listVisitants = async (req, res) => {
        const result = await visitantService.listVisitants()
        await res.status(200).json(result)
    }

    visitantController.addVisitant = async (req, res) => {
        const result = await visitantService.addVisitant(req.body.name, req.body.apVisitant, req.body.observation)
        await res.status(201).json(result)
    }

    return visitantController
}