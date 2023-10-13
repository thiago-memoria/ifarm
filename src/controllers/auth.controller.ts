import { Body, Controller, Post } from "@nestjs/common";
import { AuthForgetDTO } from "src/dto/auth/auth-forget.dto";
import { AuthLoginDTO } from "src/dto/auth/auth-login.dto";
import { AuthRegisterDTO } from "src/dto/auth/auth-register.dto";

@Controller("auth")
export class AuthController{

        @Post('login')
        async login(@Body() body: AuthLoginDTO){}

        @Post('register')
        async register(@Body() body: AuthRegisterDTO){}

        @Post('forget')
        async forget(@Body() body: AuthForgetDTO){}

}