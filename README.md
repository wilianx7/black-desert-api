# black-desert-api

## Sobre e Autor
API desenvolvida em JS utilizando as dependecias:

  ![image](https://user-images.githubusercontent.com/42422976/117554466-540c2b80-b02e-11eb-8b29-5d83525939b2.png)

Possui os recursos: Region; Character; Item; User; Auth.

## INSTALAÇÃO
Para instalar, basta fazer o download do código fonte e executar o comando ```npm install```. Após isso, navegar até a pasta /src e executar ```node index.js```.

## ENDPOINTS
    ### CHARACTER ###    
        ### Modelo de Dado
            {
                name: { type: String, required: true },
                primaryWeapon: { type: String, required: true },
                secondaryWeapon: { type: String, required: true },
                awakeningWeapon: { type: String, required: true },
                originRegion: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Region' },
                items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
            }

        ### GET
            #### Requisição
            localhost:8000/characters?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554051-941ddf00-b02b-11eb-952b-6dfc7e99fe2b.png)

            #### Erros
            401 - Unauthorized
            500 - Internal error
            #### Filtros
            skip: localhost:8000/items?userId=<replace>&token=<replace>&skip=<replace> 
            limit: localhost:8000/items?userId=<replace>&token=<replace>&limit=<replace> 
            name: localhost:8000/characters?userId=<replace>&token=<replace>&name=<replace>

        ### POST
            #### Requisição
            localhost:8000/characters?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554060-a9930900-b02b-11eb-8c34-c767b1b30a1d.png)

            #### Erros
            401 - Unauthorized
            422 - Invalid fields

        ### PUT
            #### Requisição
            localhost:8000/characters/:id?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554089-cdeee580-b02b-11eb-8853-b63b957bc7d8.png)
            
            #### Erros
            401 - Unauthorized
            404 - Character not found
            500 - Internal error

        ### DELETE
            #### Requisição 
            localhost:8000/characters/:id?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554134-fc6cc080-b02b-11eb-9b46-38e80eb5ef28.png)

            #### Erros
            401 - Unauthorized
            404 - Character not found
            500 - Internal error

    ### REGION ###
        ### Modelo de Dado
            {
                name: { type: String, required: true },
                latitude: { type: Number, required: true },
                longitude: { type: Number, required: true },
            }

        ### GET
            #### Requisição
            localhost:8000/regions?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554146-10b0bd80-b02c-11eb-8a70-f6a7bfe94697.png)

            #### Erros
            401 - Unauthorized
            500 - Internal error
            #### Filtros
            skip: localhost:8000/items?userId=<replace>&token=<replace>&skip=<replace> 
            limit: localhost:8000/items?userId=<replace>&token=<replace>&limit=<replace> 
            name: localhost:8000/regions?userId=<replace>&token=<replace>&name=<replace>

        ### POST
            #### Requisição
            localhost:8000/regions?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554158-27571480-b02c-11eb-9d88-4eb9990131d6.png)

            #### Erros
            401 - Unauthorized
            422 - Invalid fields

        ### PUT
            #### Requisição
            localhost:8000/regions/:id?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554170-3d64d500-b02c-11eb-8700-9a65cab23def.png)

            #### Erros
            401 - Unauthorized
            404 - Character not found
            500 - Internal error

        ### DELETE
            #### Requisição
            localhost:8000/regions/:id?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554177-5077a500-b02c-11eb-8918-9bfd8d330865.png)

            #### Erros
            401 - Unauthorized
            404 - Character not found
            500 - Internal error

    ### ITEM ####
        ### Modelo de Dado
            {
                name: { type: String, required: true },
                attackPower: { type: Number, default: 0 },
                defensePower: { type: Number, default: 0 },
                precision: { type: Number, default: 0 },
                type: { type: String, required: true },
            }
        
        #### Requisição
            localhost:8000/items?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554190-79983580-b02c-11eb-9d03-443fae7f7dda.png)

            #### Erros
            401 - Unauthorized
            500 - Internal error
            #### Filtros
            skip: localhost:8000/items?userId=<replace>&token=<replace>&skip=<replace> 
            limit: localhost:8000/items?userId=<replace>&token=<replace>&limit=<replace> 
            type: localhost:8000/items?userId=<replace>&token=<replace>&type=<replace>
        
        ### POST
            #### Requisição
            localhost:8000/items?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554202-8a48ab80-b02c-11eb-81db-291e333ada52.png)

            #### Erros
            401 - Unauthorized
            422 - Invalid fields
       
        ### PUT
            #### Requisição
            localhost:8000/items/:id?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554217-9df41200-b02c-11eb-83a0-662d5d157e0e.png)

            #### Erros
            401 - Unauthorized
            404 - Character not found
            500 - Internal error
        
        ### DELETE
            #### Requisição
            localhost:8000/items/:id?userId=<replace>&token=<replace>
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554223-acdac480-b02c-11eb-8bd2-6b039cc4f2b4.png)

            #### Erros
            401 - Unauthorized
            404 - Character not found
            500 - Internal error

    ### USER ###
        ### Modelo de Dado
            {
                name: { type: String, required: true },
                login: { type: String, required: true, indexes: { unique: true } },
                password: { type: String, required: true },
            }

         #### Requisição
            localhost:8000/users
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554265-ea3f5200-b02c-11eb-9d45-84c2614e5a23.png)

            #### Erros
            500 - Internal error
            #### Filtros
            skip: localhost:8000/users&skip=<replace> 
            limit: localhost:8000/users&limit=<replace> 
            name: localhost:8000/users&name=<replace>
       
        ### POST
            #### Requisição
            localhost:8000/users
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554261-df84bd00-b02c-11eb-8ddc-6031e7e7b070.png)

            #### Erros
            422 - Invalid fields
        
        ### PUT
            #### Requisição
            localhost:8000/users/:id
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554283-ffb47c00-b02c-11eb-90f7-b5068786e57d.png)

            #### Erros
              404 - Character not found
              500 - Internal error
       
        ### DELETE
            #### Requisição
            localhost:8000/users/:id
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554287-0b07a780-b02d-11eb-9511-1d8ed6811ee7.png)

       #### Erros
       404 - Character not found
       500 - Internal error

    ### AUTH ###
        ### Modelo de Dado
            {
                token: { type: String },
                user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            }

        ### POST
            #### Requisição
            localhost:8000/auth
            #### Exemplo de resposta
   ![image](https://user-images.githubusercontent.com/42422976/117554296-1ce94a80-b02d-11eb-9f58-1d21a4d05e83.png)

       #### Erros
       422 - Invalid fields

## AUTENTICAÇÃO

Para autenticação, primeiramente deve-se criar um usuário através da rota ```/users```. Depois, deve-se fazer uma requisição POST para a rota ```/auth``` informando no BODY o ID do usuário. O retorno conterá um TOKEN que deverá ser utilizado em todas as outras rotas para garantir o acesso. Para acessar as rotas privadas, deve-se passar como query string os parametros ?userId=substituir&token=substituir.
