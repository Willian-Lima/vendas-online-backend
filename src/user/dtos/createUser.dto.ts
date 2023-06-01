import { IsString } from 'class-validator';

/*
No contexto do NestJS, DTO significa "Data Transfer Object" (Objeto de Transferência de Dados). 
É um padrão de design comum usado para transferir dados entre camadas de uma aplicação, especialmente
 ao trabalhar com serviços web e APIs.

O uso de DTOs no NestJS é encorajado para ajudar a separar a camada de transporte (como controladores)
 da camada de negócios (como serviços). Os DTOs atuam como objetos intermediários que contêm apenas as 
 propriedades necessárias para uma determinada operação. Eles fornecem uma estrutura clara e bem definida
  para o transporte de dados, melhorando a legibilidade, manutenibilidade e segurança do código.
*/
export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  cpf: string;

  @IsString()
  password: string;
}
