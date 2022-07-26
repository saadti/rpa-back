module.exports = app => {
    const visitantController = app.controllers.visitantController;

    app.route('/api/visitants')
        .get(visitantController.listVisitants);

    return visitantController
}