import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";


export class AuthenticateDeliverymanController {
    async handle(request: Request, response: Response){
        const { username, password} = request.body;

        const authenticateDeliverymaneUseCase = new AuthenticateDeliverymanUseCase();

        const result = await authenticateDeliverymaneUseCase.execute({username, password})

        return response.json(result);
    }
}