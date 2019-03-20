"use strict";
const crypto = require("crypto");
const User = use("App/models/User");
class ForgotPasswordController {
  async store({ request }) {
    try {
      const email = request.input("email");
      const user = await User.findByOrFail("email", email);

      user.token = crypto.randomBytes(10).toString("hex");
      user.token_created_at = new Date();

      await user.save();
    } catch (erro) {
      return Response.status(erro.status).send({
        error: { message: "Algo de errado não esta certo" }
      });
    }
  }
}

module.exports = ForgotPasswordController;
