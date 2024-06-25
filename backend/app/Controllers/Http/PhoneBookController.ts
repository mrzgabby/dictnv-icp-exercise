import { PhoneBook } from 'Database/entities/phonebook';
import { User } from 'Database/entities/user';
import { ic } from 'azle';
import { Response, Request } from 'express';

export default class PhoneBookController {
    static async addtocontacts(request: Request, response: Response) {

        const { contactname,  contactnumber } = request.body;

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

      
    const phoneBookData: Partial<PhoneBook> = {
        contactname,
        contactnumber,
        user: findUser,
        created_at: Date.now(),
        updated_at: Date.now(),
    }

    await PhoneBook.save(phoneBookData);

      return response.json({
        status: 1,
        message: 'Contact added successfully!',
      });

    }

    static async updatecontact(request: Request, response: Response) {

        const { contactname,  contactnumber } = request.body;
        
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
    
      
      const findContact = await PhoneBook.findOneBy({
        contactname,
        contactnumber,
        user: findUser,        
        created_at: Date.now(),
        updated_at: Date.now(),
    });

    if (!findContact) {
        response.status(400).json({
            status: 0,
            message: 'Contact not found.',
        });
        return;
    }

          if (contactname) {
            findContact.contactname = contactname;
          }
    
          if (contactnumber) {
            findContact.contactnumber = contactnumber;
          }
    
          findContact.updated_at = Date.now();
    
          await PhoneBook.save(findContact);
    
          return response.json({
            status: 1,
            message: 'Contact updated successfully!',
          });

        } 
    
}