import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUserCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const list = this.listCategoriesUserCase.execute();

    return response.json(list);
  }
}

export { ListCategoriesController };
