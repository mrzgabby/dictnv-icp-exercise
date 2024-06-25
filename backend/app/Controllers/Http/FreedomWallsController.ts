
import { FreedomWall } from 'Database/entities/freedomwall';
import { User } from 'Database/entities/user';
import { ic } from 'azle';
import { Response, Request } from 'express';

export default class FreedomWallsController {
    static async create(request: Request, response: Response) {

        const { message } = request.body;

        const findUser = await User.findOneBy({
            principal_id: ic.caller().toText(),
        });   
    

    if (!findUser) {
        response.status(400);
        return response.json({
          status: 0,
          message: 'User not found.',
        });
      }

    const freedomWallData: Partial<FreedomWall> = {
        message,
        user: findUser,
        created_at: Date.now(),
        updated_at: Date.now(),
    }

    await FreedomWall.save(freedomWallData);

      return response.json({
        status: 1,
        message: 'Freedom wall message posted successfully!',
      });

    }
}