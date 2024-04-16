import { Router } from "express";
import { verifyTokens } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { deleteChats, generateChatCompletion, sendChatsToUser, } from "../controllers/chat-controller.js";
//Protected API
const chatRoutes = Router();
chatRoutes.post("/new", validate(chatCompletionValidator), verifyTokens, generateChatCompletion);
chatRoutes.get("/all-chats", verifyTokens, sendChatsToUser);
chatRoutes.delete("/delete", verifyTokens, deleteChats);
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map