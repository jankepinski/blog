const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (email: string, message: string) => {
  const msg = {
    to: process.env.SENDGRID_EMAIL_ADDRESS,
    from: process.env.SENDGRID_EMAIL_ADDRESS,
    subject: email,
    text: message,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      console.error(error);
    });
};

export async function POST(request: Request) {
  const res = await request.json();
  sendMail(res.email, res.message);
  return Response.json(res);
}
