import { response, Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

// import { getCustomRepository } from "typeorm";
// import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();
/**
 * Tipos de Parametros
 * Routes Params => Parametros de rotas
 * //locallhost:3333/setting/1
 * Query Params => Filtros e Buscas
 * //localhost:3333/setiting/1?search-algumascoisa
 * 
 * Body Params => {
 * }
 */
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

// routes.post("/settings", async (request, response) => {

export { routes };