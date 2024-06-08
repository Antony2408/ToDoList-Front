import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceID = 'service_tfwpjvn';
  private templateID = 'template_sdujiqd';
  private userID = 'kVlhbtxNGPggm_HUx';

  constructor() { }

  sendWelcomeEmail(username: string, email: string): Promise<EmailJSResponseStatus> {
    const templateParams = {
      username: username,
      to_email: email,
      message: 'Gracias por unirte a nuestra aplicación To-Do List.',
    };

    return emailjs.send(this.serviceID, this.templateID, templateParams, this.userID);
  }
}
