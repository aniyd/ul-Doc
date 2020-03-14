define({ "api": [
  {
    "type": "post",
    "url": "/resetmail",
    "title": "reset-mail",
    "description": "<p>:Send Reset password link to user</p>",
    "group": ":_Users",
    "name": ":_GenerateResetLink_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n          \"msg\": \"Reset mail sent successfully to ${email}\",\n       }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/reset-mail.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/reset",
    "title": "reset",
    "description": "<p>:Reset password process</p>",
    "group": ":_Users",
    "name": ":_ResetPassword_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmpassword",
            "description": "<p>confirmpassword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n          \"msg\": \"Password reset successfully.\",\n       }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/reset.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/refreshtoken",
    "title": "regenerate-token",
    "description": "<p>: To get the new token for already logged in user.</p>",
    "group": ":_Users",
    "name": ":_refresh-token_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n          \"token\": $token,\n          \"msg\": \"Signin Successfull\"\n       }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/refershtoken.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/signin",
    "title": "signin",
    "description": "<p>:signin process using email and password</p>",
    "group": ":_Users",
    "name": ":_signin_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n          \"token\": $token,\n          \"msg\": \"Signin Successfull\"\n       }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/signin.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/signin",
    "title": "signin-using-token",
    "description": "<p>:signin process using token</p>",
    "group": ":_Users",
    "name": ":_signin_using_token_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n          \"token\": $token\n          \"msg\": \"Signin Successfull\"\n       }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/signin.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/signout",
    "title": "signout",
    "description": "<p>:signout process</p>",
    "group": ":_Users",
    "name": ":_signout_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n          \"msg\": \"Signout successfully\" *\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/signout.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "signup",
    "description": "<p>:signup process</p>",
    "group": ":_Users",
    "name": ":_signup_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmpassword",
            "description": "<p>confirmpassword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"SignUp  successfull\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/signup.js",
    "groupTitle": ":_Users"
  }
] });