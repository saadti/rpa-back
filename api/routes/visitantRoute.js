module.exports = app => {
    const visitantController = app.controllers.visitantController;

    app.route('/api/visitants')
        .get(visitantController.listVisitants);

    app.route('/api/visitants')
        .post(visitantController.addVisitant)

    
    return visitantController
}