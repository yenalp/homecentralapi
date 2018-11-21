# Home Central Api

A very simple node project to make calls to a mysql database and return via an api

## Api calls 

The following is a list of available api calls 

### Outside Temperature

/api/v1/outside-temp - GET

Response:
```shell
{
    "data":[
        {
            "id":51423,
            "temperature":"11.625",
            "created_at":"2018-09-28T05:04:03.000Z",
            "updated_at":"2018-09-28T05:04:03.000Z"
        }
    ]
}
```

### Water tank Level 
/api/v1/mailchimp/list - GET

REsponse:

```shell
{
    "data":[
        {
            "id":36985,
            "pressure":12.986248016357422,
            "voltage":0.537109375,
            "level_mm":1324.228759765625,
            "level_percent":57.575164794921875,
            "created_at":"2018-10-18T04:42:47.000Z",
            "updated_at":"2018-10-18T04:42:47.000Z"
        }
    ]
}
```

## Run server

The run the server using "nodemon"

```shell
nodemon index.js
```
